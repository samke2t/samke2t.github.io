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
        const targetId = this.getAttribute('href');
        if (!targetId || !targetId.startsWith('#')) {
            return;
        }

        e.preventDefault();
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

const hifiCarousel = document.querySelector('.hifi-carousel');

if (hifiCarousel) {
    const screens = [
        {
            title: 'Default',
            src: 'images/hi-fi/crop-01-default.png',
            alt: 'High-fi default screen'
        },
        {
            title: 'Home',
            src: 'images/hi-fi/crop-02-home.png',
            alt: 'High-fi home screen'
        },
        {
            title: 'Explore',
            src: 'images/hi-fi/crop-03-explore.png',
            alt: 'High-fi explore screen'
        },
        {
            title: 'Collection',
            src: 'images/hi-fi/crop-04-collection.png',
            alt: 'High-fi collection screen'
        },
        {
            title: 'Object Detail',
            src: 'images/hi-fi/crop-05-object-detail.png',
            alt: 'High-fi object detail screen'
        },
        {
            title: 'Then & Now',
            src: 'images/hi-fi/crop-06-then-now.png',
            alt: 'High-fi Then and Now comparison screen'
        },
        {
            title: 'Memory Question',
            src: 'images/hi-fi/crop-07-memory-question.png',
            alt: 'High-fi memory question screen'
        },
        {
            title: 'Memory Saved',
            src: 'images/hi-fi/crop-08-memory-saved.png',
            alt: 'High-fi memory saved screen'
        },
        {
            title: 'Profile',
            src: 'images/hi-fi/crop-09-profile.png',
            alt: 'High-fi profile screen'
        }
    ];

    let currentScreen = 0;
    let touchStartX = 0;

    const image = hifiCarousel.querySelector('[data-hifi-carousel-image]');
    const title = hifiCarousel.querySelector('[data-hifi-carousel-title]');
    const count = hifiCarousel.querySelector('[data-hifi-carousel-count]');
    const swipeArea = hifiCarousel.querySelector('[data-hifi-swipe]');

    const showScreen = (index) => {
        currentScreen = (index + screens.length) % screens.length;
        const screen = screens[currentScreen];
        image.src = screen.src;
        image.alt = screen.alt;
        title.textContent = screen.title;
        count.textContent = `${String(currentScreen + 1).padStart(2, '0')} / ${String(screens.length).padStart(2, '0')}`;
    };

    hifiCarousel.querySelector('[data-hifi-prev]')?.addEventListener('click', () => {
        showScreen(currentScreen - 1);
    });

    hifiCarousel.querySelector('[data-hifi-next]')?.addEventListener('click', () => {
        showScreen(currentScreen + 1);
    });

    swipeArea?.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });

    swipeArea?.addEventListener('touchend', (event) => {
        const deltaX = event.changedTouches[0].clientX - touchStartX;
        if (Math.abs(deltaX) < 40) {
            return;
        }
        showScreen(deltaX < 0 ? currentScreen + 1 : currentScreen - 1);
    }, { passive: true });
}
