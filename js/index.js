const btn = document.querySelector('.menu-burger');
const menu = document.getElementById('navLinks');
const icon = btn.querySelector('i');

btn.addEventListener('click', () => {
    menu.classList.toggle('open');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});