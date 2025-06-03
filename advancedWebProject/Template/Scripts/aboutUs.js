
//Scrolling Effect

//Setting the scroll position
var lastScrollTop = window.scrollY;

//Getting top and bottom headers
var navbar = document.querySelector('.navbar');
var bottomHeader = document.querySelector('.bottomHeader');

//Adding the listener to update the scroll and headers
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

