document.addEventListener('DOMContentLoaded', function () {
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navbar = document.querySelector('#navbar ul');

    if (mobileToggle && navbar) {
        mobileToggle.addEventListener('click', function () {
            navbar.classList.toggle('active');
        });
    }

    document.querySelectorAll('a.scrollto').forEach((link) => {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                event.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({ top: targetSection.offsetTop - 110, behavior: 'smooth' });
                }
                if (navbar.classList.contains('active')) {
                    navbar.classList.remove('active');
                }
            }
        });
    });
});
