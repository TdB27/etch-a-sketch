const showModal = document.querySelector('.main-center__aside');
const moveHamburger = document.querySelector('.main-center__aside__hamburger-bg');
const hamburger = document.querySelector('.main-center__aside__hamburger');
const showNav = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    showModal.classList.toggle('modal')
    moveHamburger.classList.toggle('left')
    showNav.classList.toggle('show')
})
