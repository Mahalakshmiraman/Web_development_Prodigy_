// script.js
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(90deg, #00bfff, #1e90ff)';
    } else {
        navbar.style.background = 'linear-gradient(90deg, #1e90ff, #00bfff)';
    }
});
