const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

document.querySelectorAll('nav a, .footer-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
            });
            const desktopNav = document.getElementById('desktop-nav');
            if (window.innerWidth < 1024) {
                desktopNav.style.display = 'none';
            }
        }
    });
});

const menuToggle = document.getElementById('menu-toggle');
const desktopNav = document.getElementById('desktop-nav');

if (menuToggle && desktopNav) {
    menuToggle.addEventListener('click', () => {
        const isVisible = window.getComputedStyle(desktopNav).display !== 'none';
        if (isVisible) {
            desktopNav.style.display = 'none';
        } else {
            desktopNav.style.display = 'flex';
            desktopNav.style.flexDirection = 'column';
            desktopNav.style.position = 'absolute';
            desktopNav.style.top = '4rem';
            desktopNav.style.left = '0';
            desktopNav.style.right = '0';
            desktopNav.style.background = 'white';
            desktopNav.style.padding = '2rem';
            desktopNav.style.borderBottom = '1px solid var(--slate-100)';
            desktopNav.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)';
        }
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        desktopNav.style.display = 'flex';
        desktopNav.style.flexDirection = 'row';
        desktopNav.style.position = 'static';
        desktopNav.style.padding = '0';
        desktopNav.style.borderBottom = 'none';
        desktopNav.style.boxShadow = 'none';
    } else {
        desktopNav.style.display = 'none';
    }
});
