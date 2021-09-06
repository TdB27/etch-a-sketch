const buttonDefault = document.querySelector('.navigation__default')
const buttonRandom = document.querySelector('.navigation__colors-random');
const buttonErase = document.querySelector('.navigation__erase');
const buttonClear = document.querySelector('.navigation__clear');
const buttonGrid = document.querySelector('.navigation__grid');
let changeParagraph = document.querySelector('.navigation__frame-size-box__paragraph');
let input = document.querySelector('.navigation__frame-size-input');

buttonDefault.onclick = () => changeColor('default')
buttonRandom.onclick = () => changeColor('random');
buttonErase.onclick = () => changeColor('erase');
buttonClear.onclick = () => changeColor('clear');
buttonGrid.onclick = () => changeColor('grid');
input.onmousemove = (e) => changeParagraphforInput(e.target.value)



function changeParagraphforInput(value) {
    changeParagraph.innerHTML = `${value} x ${value}`
}

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
