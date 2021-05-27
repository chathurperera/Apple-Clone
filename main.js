const mobMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('header');

mobMenu.addEventListener('click',() => {
    header.classList.toggle('active');
});