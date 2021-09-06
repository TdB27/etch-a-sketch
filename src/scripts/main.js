let input = document.querySelector('.navigation__frame-size-input')

input.addEventListener('mousemove', () => {
    let changeParagraph = document.querySelector('.navigation__frame-size-box__paragraph')
    changeParagraph.innerHTML = `${input.value} x ${input.value}`
})


function changeColor(value) {
    let changeColorButton = document.querySelectorAll('[data-color]');
    
    changeColorButton.forEach(item => {
        const itemColor = item.getAttribute('data-color');

        if(itemColor === value) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })
}
