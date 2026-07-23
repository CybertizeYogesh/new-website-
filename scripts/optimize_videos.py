import os
import sys
import subprocess
import shutil

IGNORE_DIRS = {
    'node_modules', '.git', '.next', 'dist', 'build', 'out', '.vscode', '.gemini', 'brain'
}

VIDEO_GIF_EXTENSIONS = {'.mp4', '.mov', '.avi', '.mkv', '.webm', '.m4v', '.gif'}
CODE_EXTENSIONS = {'.html', '.css', '.js', '.jsx', '.ts', '.tsx', '.json', '.md'}

def format_bytes(bytes_val):
    if bytes_val == 0:
        return '0 B'
    sizes = ['B', 'KB', 'MB', 'GB']
    i = 0
    val = float(bytes_val)
    while val >= 1024 and i < len(sizes) - 1:
        val /= 1024.0
        i += 1
    return f"{val:.2f} {sizes[i]}"

def get_ffmpeg_path():
    ffmpeg = shutil.which('ffmpeg')
    if not ffmpeg:
        print("❌ ERROR: FFmpeg executable not found in PATH.")
        print("Please install FFmpeg or install ffmpeg-python / ffmpeg-static.")
        sys.exit(1)
    return ffmpeg

def compress_media(ffmpeg_path, input_path, output_path, is_gif=False, format_type='mp4'):
    if is_gif:
        if format_type == 'webm':
            cmd = [
                ffmpeg_path, '-y', '-i', input_path,
                '-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', '32',
                '-pix_fmt', 'yuva420p', '-an', output_path
            ]
        else:
            cmd = [
                ffmpeg_path, '-y', '-i', input_path,
                '-movflags', 'faststart', '-pix_fmt', 'yuv420p',
                '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2',
                '-c:v', 'libx264', '-crf', '24', '-preset', 'medium', '-an', output_path
            ]
    else:
        if format_type == 'webm':
            cmd = [
                ffmpeg_path, '-y', '-i', input_path,
                '-c:v', 'libvpx-vp9', '-crf', '30', '-b:v', '0',
                '-c:a', 'libopus', '-b:a', '128k', output_path
            ]
        else:
            cmd = [
                ffmpeg_path, '-y', '-i', input_path,
                '-c:v', 'libx264', '-crf', '23', '-preset', 'medium',
                '-movflags', '+faststart', '-c:a', 'aac', '-b:a', '128k',
                '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2', output_path
            ]

    subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)

def discover_files(root_dir):
    media_files = []
    code_files = []

    for dirpath, dirnames, filenames in os.walk(root_dir):
        dirnames[:] = [d for d in dirnames if d not in IGNORE_DIRS]

        for filename in filenames:
            ext = os.path.splitext(filename)[1].lower()
            full_path = os.path.join(dirpath, filename)
            if ext in VIDEO_GIF_EXTENSIONS:
                media_files.append(full_path)
            elif ext in CODE_EXTENSIONS:
                code_files.append(full_path)

    return media_files, code_files

def main():
    root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    ffmpeg_path = get_ffmpeg_path()

    print(f"🎥 Starting Video & GIF Optimization Automation...\n")
    print(f"Using FFmpeg at: {ffmpeg_path}\n")

    media_files, code_files = discover_files(root_dir)

    if not media_files:
        print("✨ No video or GIF files found.")
        return

    print(f"📹 Found {len(media_files)} media file(s) to optimize.")
    print(f"📝 Found {len(code_files)} code file(s) to check for references.\n")

    report = []
    conversion_map = {}
    total_orig = 0
    total_opt = 0

    for old_path in media_files:
        dir_name, file_name = os.path.split(old_path)
        base_name, ext = os.path.splitext(file_name)
        is_gif = ext.lower() == '.gif'
        target_ext = '.mp4' if is_gif else ext.lower()

        temp_output = os.path.join(dir_name, f"{base_name}_optimized{target_ext}")
        final_output = os.path.join(dir_name, f"{base_name}{target_ext}")

        rel_old = os.path.relpath(old_path, root_dir)
        print(f"Optimizing: {rel_old}...")

        try:
            orig_size = os.path.getsize(old_path)
            total_orig += orig_size

            compress_media(ffmpeg_path, old_path, temp_output, is_gif, 'webm' if target_ext == '.webm' else 'mp4')

            opt_size = os.path.getsize(temp_output)
            total_opt += opt_size

            if old_path != final_output:
                shutil.move(temp_output, final_output)
            else:
                shutil.move(temp_output, old_path)

            reduction = ((orig_size - opt_size) / orig_size) * 100
            conversion_map[file_name] = os.path.basename(final_output)

            report.append({
                'orig_name': file_name,
                'opt_name': os.path.basename(final_output),
                'orig_size': orig_size,
                'opt_size': opt_size,
                'reduction': f"{reduction:.2f}%",
                'status': 'SUCCESS'
            })
            print(f"  └─ ✅ Success: {format_bytes(orig_size)} ➔ {format_bytes(opt_size)} ({reduction:.2f}% reduction)")

        except Exception as e:
            print(f"  └─ ❌ Failed: {e}")
            if os.path.exists(temp_output):
                os.remove(temp_output)

    # Update Code
    print("\n🔄 Updating media references in source code files...")
    updated_files = 0
    for code_path in code_files:
        try:
            with open(code_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()

            modified = False
            for old_name, new_name in conversion_map.items():
                if old_name != new_name and old_name in content:
                    content = content.replace(old_name, new_name)
                    modified = True

            if modified:
                with open(code_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                updated_files += 1
                print(f"  └─ Updated: {os.path.relpath(code_path, root_dir)}")
        except Exception as e:
            print(f"  └─ ❌ Could not update {code_path}: {e}")

    # Summary
    print("\n======================================================")
    print("📊 MEDIA OPTIMIZATION SUMMARY REPORT")
    print("======================================================")
    print(f"{'Original File':<30} {'Optimized File':<30} {'Orig Size':<12} {'Opt Size':<12} {'Reduction'}")
    print("-" * 95)
    for r in report:
        print(f"{r['orig_name']:<30} {r['opt_name']:<30} {format_bytes(r['orig_size']):<12} {format_bytes(r['opt_size']):<12} {r['reduction']}")

    total_saved = total_orig - total_opt
    pct = ((total_saved) / total_orig * 100) if total_orig > 0 else 0
    print("\n📈 Overall Results:")
    print(f"   - Original Total Size : {format_bytes(total_orig)}")
    print(f"   - Optimized Total Size: {format_bytes(total_opt)}")
    print(f"   - Total Space Saved   : {format_bytes(total_saved)} ({pct:.2f}% reduction)")
    print(f"   - Code Files Updated  : {updated_files}")
    print("======================================================\n")

if __name__ == '__main__':
    main()
