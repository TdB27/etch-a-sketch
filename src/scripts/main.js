const buttonDefault = document.querySelector('.navigation__default')
const buttonRandom = document.querySelector('.navigation__colors-random');
const buttonErase = document.querySelector('.navigation__erase');
const buttonClear = document.querySelector('.navigation__clear');
const buttonGrid = document.querySelector('.navigation__grid');
let changeParagraph = document.querySelector('.navigation__frame-size-box__paragraph');
let inputRange = document.querySelector('.navigation__frame-size-input');
let blocoBox = document.querySelector('.bloco-desenho__box')

buttonDefault.onclick = () => changeColor('default')
buttonRandom.onclick = () => changeColor('random');
buttonErase.onclick = () => changeColor('erase');
buttonClear.onclick = () => changeColor('clear');
buttonGrid.onclick = () => changeColor('grid');
inputRange.onclick = (e) => changeSizeGrid(e.target.value)
inputRange.onmousemove = (e) => changeParagraphforInput(e.target.value)


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


//chamar o blocoBox
// criar um filho com a classe grid
// alterar essas propriedades
// criar os filhos de acordo com o value
function changeSizeGrid(value) {
    blocoBox.innerHTML = ''
    blocoBox.setAttribute('style', `grid-template-columns: repeat(${value}, 1fr); grid-template-rows: repeat(${value}, 1fr)`)
    
    for(let i = 0; i < value * value; i++) {
        divBox = document.createElement('div');
        divBox.classList.add('grid')
        blocoBox.appendChild(divBox)
    }
}

