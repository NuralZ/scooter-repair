// 1. Theme Inversion Selector
const themeSwitch = document.getElementById('theme-switch');
const html = document.documentElement;

themeSwitch.addEventListener('click', () => {
    if (html.getAttribute('data-theme') === 'light') {
        html.setAttribute('data-theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
    }
});

// 2. Hidden Burger Menu Logic
const burgerBtn = document.getElementById('burger-btn');
const navMenu = document.getElementById('nav-menu');

burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});