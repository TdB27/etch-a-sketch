const buttonDefault = document.querySelector('.navigation__default')
const buttonRandom = document.querySelector('.navigation__colors-random');
const buttonErase = document.querySelector('.navigation__erase');
const buttonClear = document.querySelector('.navigation__clear');
const buttonGrid = document.querySelector('.navigation__grid');
let changeParagraph = document.querySelector('.navigation__frame-size-box__paragraph');
let inputRange = document.querySelector('.navigation__frame-size-input');
let blocoBox = document.querySelector('.bloco-desenho__box')


buttonDefault.onclick = () => {changeButton('default'), changeColor('default')};
buttonRandom.onclick = () => {changeButton('random'), changeColor('random')};
buttonErase.onclick = () => {changeButton('erase'), changeColor('erase')};
buttonClear.onclick = () => clearGrid();
buttonGrid.onclick = () => changeButton('grid');
inputRange.onclick = e => changeSizeGrid(e.target.value)
inputRange.onmousemove = e => changeParagraphforInput(e.target.value)


function changeParagraphforInput(value) {
    changeParagraph.innerHTML = `${value} x ${value}`
}

function changeButton(value) {
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

function changeSizeGrid(value) {
    blocoBox.innerHTML = ''
    blocoBox.setAttribute('style', `grid-template-columns: repeat(${value}, 1fr); grid-template-rows: repeat(${value}, 1fr)`)
    
    for(let i = 0; i < value * value; i++) {
        divBox = document.createElement('div');
        divBox.classList.add('grid')
        blocoBox.appendChild(divBox)
    }

    changeButton('default')
    changeColor('default')
}

function changeColor(value) {
    const changeStyle = document.querySelectorAll('.grid');
    changeStyle.forEach(item => {
        item.addEventListener('click', () => {
            if(value == 'default'){
                item.setAttribute('style', 'background-color: #000000')
            } else if (value == 'random'){
                let backgroundR = [Math.floor(Math.random() * 255)];
                let backgroundG = [Math.floor(Math.random() * 255)];
                let backgroundB = [Math.floor(Math.random() * 255)];
                item.setAttribute('style', `background-color: rgb(${backgroundR}, ${backgroundG}, ${backgroundB})`)
            } else if (value === 'erase'){
                item.setAttribute('style', 'background-color: #FFFFFF')
            }
            
        })
    })
}

function clearGrid() {
    const changeStyle = document.querySelectorAll('.grid');
    changeStyle.forEach(item => {
        item.setAttribute('style', 'background-color: #FFFFFF')
    })
}

window.onload = () => changeColor('default')

