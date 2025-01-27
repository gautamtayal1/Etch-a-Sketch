const container = document.querySelector('#container');
const gridNumber = document.querySelector('.num');
const submitBtn = document.querySelector('.submit')

const box = document.createElement('div');
box.classList.add("container");
container.appendChild(box)

submitBtn.addEventListener('click', () => {
    box.innerHTML = ''
    const gridBoxes = gridNumber.value;
    totalBoxes = gridBoxes**2
    const cellSize = 480/gridBoxes
    for (i = 0 ; i < totalBoxes; i++){
        const boxes = document.createElement('div');
        boxes.classList.add("boxes");
        box.appendChild(boxes)
        boxes.style.width = `${cellSize}px`
        boxes.style.height = `${cellSize}px`
        boxes.addEventListener('mouseenter', () => {
            boxes.classList.add('hover')
            
        })
    }
})




