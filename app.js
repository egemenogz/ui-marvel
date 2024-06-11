function goToAbout() {
    window.location.href = "about.html";
}

/* hamburger menu */
document.addEventListener('DOMContentLoaded', function() {
    let hamburgerToggle = document.querySelector('.hamburger__toggle');
    let menuContainer = document.querySelector('.menu-container');
    let navbar = document.querySelector('.navbar-tre');
    let lastScrollTop = 0;

    if (hamburgerToggle && menuContainer) {
        // Toggle menu on hamburger button click
        hamburgerToggle.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the click from propagating to the document
            menuContainer.classList.toggle('show');
            hamburgerToggle.classList.toggle('cross');
        });

        // Close menu when clicking outside of it
        document.addEventListener('click', function(event) {
            if (!menuContainer.contains(event.target) && !hamburgerToggle.contains(event.target)) {
                menuContainer.classList.remove('show');
                hamburgerToggle.classList.remove('cross');
            }
        });
    }

    // Hide/Show navbar on scroll
    window.addEventListener('scroll', function() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 50 ) {
            // Scroll down
            menuContainer.classList.remove('show');
            hamburgerToggle.classList.remove('cross');
            navbar.classList.add('navbar-hidden');
            navbar.classList.remove('navbar-visible');
        } else if (scrollTop < lastScrollTop) {
            // Scroll up
            menuContainer.classList.remove('show');
            hamburgerToggle.classList.remove('cross');
            navbar.classList.add('navbar-visible');
            navbar.classList.remove('navbar-hidden');
        }
        lastScrollTop = scrollTop;
    });
});


/* hamburger js ends */