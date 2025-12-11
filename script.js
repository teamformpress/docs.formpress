document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Accordion functionality for FAQ
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            
            // Close other items (optional - uncomment if you want only one open at a time)
            // document.querySelectorAll('.accordion-item').forEach(i => {
            //     if (i !== item) i.classList.remove('active');
            // });

            item.classList.toggle('active');
        });
    });

    // Active link highlighting
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPath.split('/').pop()) {
            item.classList.add('active');
        }
    });
});
