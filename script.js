// Initialize Icons
lucide.createIcons();

// Mobile Menu Logic
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const icon = btn.querySelector('i');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        
        // Change icon based on menu state
        if (menu.classList.contains('hidden')) {
            icon.setAttribute('data-lucide', 'menu');
            document.body.style.overflow = 'auto'; // allow scroll
        } else {
            icon.setAttribute('data-lucide', 'x');
            document.body.style.overflow = 'hidden'; // prevent scroll when menu open
        }
        lucide.createIcons();
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            icon.setAttribute('data-lucide', 'menu');
            document.body.style.overflow = 'auto';
            lucide.createIcons();
        });
    });
});
