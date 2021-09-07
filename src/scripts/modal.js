const showModal = document.querySelector('.main-center__aside');
const showNav = document.querySelector('.main-center__aside__sidebar');
const hamburger = document.querySelector('.main-center__aside__hamburger');
const bgNav = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    showModal.classList.toggle('modal')
    showNav.classList.toggle('left')
    bgNav.classList.toggle('show')
})
