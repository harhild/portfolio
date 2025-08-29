document.addEventListener('DOMContentLoaded', () => {

    // --- PRELOADER ---
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 500); // Wait half a second before hiding
    });

    // --- THEME SWITCHER ---
    const body = document.body;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // Function to apply theme, save it, and update icon visibility
    const applyTheme = (theme) => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            sunIcon.style.display = 'inline-block'; // Show sun to switch back to light
            moonIcon.style.display = 'none';
        } else {
            body.classList.remove('dark-mode');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline-block'; // Show moon to switch to dark
        }
    };

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Add click listeners to icons to toggle the theme
    sunIcon.addEventListener('click', () => applyTheme('light'));
    moonIcon.addEventListener('click', () => applyTheme('dark'));

    // --- MOBILE NAV (HAMBURGER MENU) ---
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('nav ul');

    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('active');
        // Also toggle the icon between hamburger and 'X'
        menuIcon.classList.toggle('fa-times'); // fa-times is the 'X' icon
    });

    // Close menu when a link is clicked
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuIcon.classList.remove('fa-times');
            }
        });
    });

    // --- CUSTOM CURSOR ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    // Hide cursor on mobile devices for better UX
    const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice()) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
    // --- CONTACT FORM VALIDATION ---
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // ફોર્મને સબમિટ થતું અટકાવો

        const name = document.getElementById('form-name');
        const email = document.getElementById('form-email');
        const message = document.getElementById('form-message');
        let isValid = true;

        // જૂની એરર દૂર કરો
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

        // નામ ચેક કરો
        if (name.value.trim() === '') {
            isValid = false;
            showError(name, 'Please enter your name.');
        }

        // ઇમેઇલ ચેક કરો
        if (email.value.trim() === '') {
            isValid = false;
            showError(email, 'Please enter your email.');
        } else if (!isValidEmail(email.value)) {
            isValid = false;
            showError(email, 'Please enter a valid email address.');
        }

        // મેસેજ ચેક કરો
        if (message.value.trim() === '') {
            isValid = false;
            showError(message, 'Message cannot be empty.');
        }

        if (isValid) {
            // જો બધું બરાબર હોય, તો ફોર્મ સબમિટ કરો (અથવા અહીં મેસેજ બતાવો)
            alert('Thank you for your message!');
            contactForm.reset(); // ફોર્મ ખાલી કરો
        }
    });

    function showError(input, message) {
        input.classList.add('error');
        const errorElement = input.parentElement.querySelector('.error-message');
        errorElement.textContent = message;
    }

    function isValidEmail(email) {
        const regex = /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }
document.addEventListener('DOMContentLoaded', () => {

    // --- PRELOADER ---
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 500);
    });

    // --- THEME SWITCHER ---
    const body = document.body;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    const applyTheme = (theme) => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            sunIcon.style.display = 'inline-block';
            moonIcon.style.display = 'none';
        } else {
            body.classList.remove('dark-mode');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline-block';
        }
    };

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    sunIcon.addEventListener('click', () => applyTheme('light'));
    moonIcon.addEventListener('click', () => applyTheme('dark'));

    // --- MOBILE NAV (HAMBURGER MENU) ---
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('nav ul');

    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('active');
        menuIcon.classList.toggle('fa-times');
    });

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuIcon.classList.remove('fa-times');
            }
        });
    });

    // --- CONTACT FORM VALIDATION ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('form-name');
            const email = document.getElementById('form-email');
            const message = document.getElementById('form-message');
            let isValid = true;

            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

            if (name.value.trim() === '') {
                isValid = false;
                showError(name, 'Please enter your name.');
            }

            if (email.value.trim() === '') {
                isValid = false;
                showError(email, 'Please enter your email.');
            } else if (!isValidEmail(email.value)) {
                isValid = false;
                showError(email, 'Please enter a valid email address.');
            }

            if (message.value.trim() === '') {
                isValid = false;
                showError(message, 'Message cannot be empty.');
            }

            if (isValid) {
                alert('Thank you for your message!');
                contactForm.reset();
            }
        });
    }

    function showError(input, message) {
        input.classList.add('error');
        const errorElement = input.parentElement.querySelector('.error-message');
        errorElement.textContent = message;
    }

    function isValidEmail(email) {
        const regex = /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }

    // --- CUSTOM CURSOR ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice()) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `px`;
            cursorDot.style.top = `px`;

            cursorOutline.animate({
                left: `px`,
                top: `px`
            }, { duration: 500, fill: "forwards" });
        });

        document.querySelectorAll('a, button, .theme-switch-wrapper i, #menu-icon').forEach(el => {
            el.addEventListener('mouseover', () => {
                cursorOutline.style.width = '60px';
                cursorOutline.style.height = '60px';
                cursorOutline.style.borderColor = 'var(--gradient-end)';
            });
            el.addEventListener('mouseout', () => {
                cursorOutline.style.width = '40px';
                cursorOutline.style.height = '40px';
                cursorOutline.style.borderColor = 'var(--primary-color)';
            });
        });
    } else {
        cursorDot.style.display = 'none';
        cursorOutline.style.display = 'none';
        document.body.style.cursor = 'auto';
    }

    // --- SCROLL ANIMATIONS ---
    const scrollElements = document.querySelectorAll('.animate-on-scroll');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();
});
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Add hover effect to cursor
        document.querySelectorAll('a, button, .theme-switch-wrapper i, #menu-icon').forEach(el => {
            el.addEventListener('mouseover', () => {
                cursorOutline.style.width = '60px';
                cursorOutline.style.height = '60px';
                cursorOutline.style.borderColor = 'var(--gradient-end)';
            });
            el.addEventListener('mouseout', () => {
                cursorOutline.style.width = '40px';
                cursorOutline.style.height = '40px';
                cursorOutline.style.borderColor = 'var(--primary-color)';
            });
        });
    } else {
        // If it's a touch device, hide the custom cursor elements and show the default one
        cursorDot.style.display = 'none';
        cursorOutline.style.display = 'none';
        document.body.style.cursor = 'auto';
    }


    // --- SCROLL ANIMATIONS ---
    const scrollElements = document.querySelectorAll('.animate-on-scroll');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    // Trigger on load as well
    handleScrollAnimation();
});