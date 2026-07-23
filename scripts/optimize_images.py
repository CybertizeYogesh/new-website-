import os
import sys
import re
from PIL import Image

MAX_FILE_SIZE_BYTES = 120 * 1024  # 120 KB

IGNORE_DIRS = {
    'node_modules', '.git', '.next', 'dist', 'build', 'out', '.vscode', '.gemini', 'brain'
}

IMAGE_EXTENSIONS = {'.jpg', '.jpeg', '.png'}
CODE_EXTENSIONS = {'.html', '.css', '.js', '.jsx', '.ts', '.tsx', '.json', '.md'}

def compress_image_to_webp(input_path, output_path):
    with Image.open(input_path) as img:
        # Convert RGBA / P modes to RGB if needed for WebP or preserve transparency
        if img.mode in ('RGBA', 'LA'):
            img_format = 'WEBP'
        else:
            img = img.convert('RGB')
            img_format = 'WEBP'

        original_width, original_height = img.size
        width = original_width
        quality = 85

        # Step 1: Adjust Quality
        while quality >= 40:
            img_resized = img.resize((width, int(original_height * (width / original_width))), Image.Resampling.LANCZOS)
            img_resized.save(output_path, 'WEBP', quality=quality, optimize=True)

            if os.path.getsize(output_path) <= MAX_FILE_SIZE_BYTES:
                return True, os.path.getsize(output_path), quality, width
            quality -= 10

        # Step 2: Scale down dimensions if quality adjustments alone didn't reach target size
        while width > 400:
            width = int(width * 0.85)
            height = int(original_height * (width / original_width))
            img_resized = img.resize((width, height), Image.Resampling.LANCZOS)
            img_resized.save(output_path, 'WEBP', quality=65, optimize=True)

            if os.path.getsize(output_path) <= MAX_FILE_SIZE_BYTES:
                return True, os.path.getsize(output_path), 65, width

        return os.path.getsize(output_path) <= MAX_FILE_SIZE_BYTES, os.path.getsize(output_path), 65, width

def discover_files(root_dir):
    image_files = []
    code_files = []

    for dirpath, dirnames, filenames in os.walk(root_dir):
        # Skip ignored directories
        dirnames[:] = [d for d in dirnames if d not in IGNORE_DIRS]

        for filename in filenames:
            ext = os.path.splitext(filename)[1].lower()
            full_path = os.path.join(dirpath, filename)
            if ext in IMAGE_EXTENSIONS:
                image_files.append(full_path)
            elif ext in CODE_EXTENSIONS:
                code_files.append(full_path)

    return image_files, code_files

def main():
    root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    print(f"🔍 Scanning project directory: {root_dir}\n")

    image_files, code_files = discover_files(root_dir)

    if not image_files:
        print("✨ No .jpg, .jpeg, or .png images found.")
        return

    print(f"🖼️  Found {len(image_files)} images to convert.")
    print(f"📝 Found {len(code_files)} code files to check for references.\n")

    conversion_map = {}

    # Phase 1: Convert & Compress
    for old_path in image_files:
        dir_name, file_name = os.path.split(old_path)
        base_name, _ = os.path.splitext(file_name)
        new_file_name = f"{base_name}.webp"
        new_path = os.path.join(dir_name, new_file_name)

        rel_old = os.path.relpath(old_path, root_dir)
        print(f"Processing: {rel_old}...")

        try:
            success, final_size, quality, width = compress_image_to_webp(old_path, new_path)
            size_kb = final_size / 1024
            if success:
                print(f"  └─ ✅ Converted to WebP ({size_kb:.2f} KB, Quality: {quality}%)")
            else:
                print(f"  └─ ⚠️ Converted to WebP ({size_kb:.2f} KB - closest fit)")
            conversion_map[file_name] = new_file_name
        except Exception as e:
            print(f"  └─ ❌ Failed to convert {old_path}: {e}")

    # Phase 2: Update Code References
    print("\n🔄 Updating image extensions in source code files...")
    updated_files = 0

    for code_path in code_files:
        try:
            with open(code_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()

            modified = False
            for old_name, new_name in conversion_map.items():
                if old_name in content:
                    content = content.replace(old_name, new_name)
                    modified = True

            if modified:
                with open(code_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                updated_files += 1
                rel_code = os.path.relpath(code_path, root_dir)
                print(f"  └─ Updated: {rel_code}")
        except Exception as e:
            print(f"  └─ ❌ Could not update {code_path}: {e}")

    print(f"\n✅ Updated {updated_files} source code files.")

    # Phase 3: Cleanup
    print("\n🧹 Cleaning up original image files...")
    deleted_count = 0
    for old_path in image_files:
        dir_name, file_name = os.path.split(old_path)
        base_name, _ = os.path.splitext(file_name)
        new_path = os.path.join(dir_name, f"{base_name}.webp")

        if os.path.exists(new_path) and os.path.getsize(new_path) > 0:
            try:
                os.remove(old_path)
                deleted_count += 1
            except Exception as e:
                print(f"  └─ Could not delete {old_path}: {e}")

    print(f"\n🎉 Process Complete! Deleted {deleted_count} original image files.")

if __name__ == '__main__':
    main()
