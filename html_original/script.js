document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navCloseBtn = document.getElementById('navCloseBtn');
    const navBackdrop = document.getElementById('navBackdrop');
    const body = document.body;

    function openMenu() {
        navToggle.classList.add('active');
        navMenu.classList.add('active');
        navBackdrop && navBackdrop.classList.add('active');
        body.classList.add('no-scroll');
    }

    function closeMenu() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navBackdrop && navBackdrop.classList.remove('active');
        body.classList.remove('no-scroll');
    }

    navToggle.addEventListener('click', () => {
        navMenu.classList.contains('active') ? closeMenu() : openMenu();
    });

    // Close button (X) inside menu
    if (navCloseBtn) {
        navCloseBtn.addEventListener('click', closeMenu);
    }

    // Clicking backdrop closes menu
    if (navBackdrop) {
        navBackdrop.addEventListener('click', closeMenu);
    }

    // Removed closeMenu listener from standard links to fix Safari touch cancellation bug
    // (the page will reload anyway, and for # links we already handle it below)

    // Mobile Dropdown Toggle
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger > a');

    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            // Only prevent default on mobile/tablet view where the toggle is visible
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const parent = trigger.parentElement;
                parent.classList.toggle('active');

                // Close other dropdowns if any (optional, but good UX)
                document.querySelectorAll('.dropdown-trigger').forEach(item => {
                    if (item !== parent) {
                        item.classList.remove('active');
                    }
                });
            }
        });
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scroll Animation (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Dynamic Copyright Year
    const yearSpan = document.querySelector('.footer-bottom p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = `&copy; ${currentYear} HSM Packers and Movers Electronic City. All Rights Reserved. <br> Developed & Design By
                    <a href="https://altgs.in" target="_blank"
                        style="color: inherit; text-decoration: underline;">Acilaris Technologies Pvt. Ltd.</a>`;
    }

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;

            // Allow default behavior for links to other pages (e.g., index.html#services)
            // But if it's on the same page, prevent default and scroll smoothly
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    closeMenu();

                    const headerOffset = 85;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
    // Counter Animation
    const counters = document.querySelectorAll('.stat-number, .step-number'); // Selects both types of counters

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.getAttribute('data-target'));
                // Extract suffix and TRIM whitespace to avoid issues with newlines in HTML
                const suffix = counter.innerText.replace(/[0-9.]/g, '').trim();

                if (!target) return; // Skip if no target

                const duration = 2000; // 2 seconds

                let current = 0;
                const increment = target / (duration / 16); // 60fps

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }

                    // Format number: if integer, show integer. If float, show 1 decimal.
                    // For 'k' values (like 9.5), we might want to keep decimals.
                    let formatted = current > 1000 ? Math.floor(current) : Math.floor(current * 10) / 10;
                    if (suffix.includes('k')) {
                        formatted = current.toFixed(1);
                        if (formatted.endsWith('.0')) formatted = parseInt(formatted);
                    } else {
                        formatted = Math.floor(current);
                    }

                    counter.innerText = formatted + suffix;
                }, 16);

                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% visible

    counters.forEach(counter => {
        if (counter.getAttribute('data-target')) {
            counterObserver.observe(counter);
        }
    });
});
