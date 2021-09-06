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
