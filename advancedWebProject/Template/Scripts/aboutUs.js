var lastScrollTop = window.scrollY;
var navbar = document.querySelector('.navbar');
var bottomHeader = document.querySelector('.bottomHeader');

window.addEventListener('scroll', () => {
    var scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        // Switching visible bar to bottomHeader
        navbar.style.top = "-100px"; 
        bottomHeader.style.bottom = "0"; 
    } else {
        // Swithcing the visible bar to navbar
        navbar.style.top = "0"; 
        bottomHeader.style.bottom = "-100px"; 
    }

    lastScrollTop = scrollTop; 
});

