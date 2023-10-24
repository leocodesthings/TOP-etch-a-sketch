let board = document.querySelector('#board');
let pixelMark = document.querySelector('.pixel');
//let pixelMark = board.querySelectorAll('.pixel');
//
// document.addEventListener("DOMContentLoaded", () => {
//
// })
function etchBoard() {
    for (let i = 0; i < 256; i++) {
        let boardPixel = document.createElement('div');
        boardPixel.classList.add('pixel');
        board.appendChild(boardPixel);
    }
}

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function markBoard() {
    document.addEventListener("mouseover", (event) => {
        document.body.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    })
}

// pixelMark.addEventListener("mouseover", () => {
//     pixelMark.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
// })


// pixelMark.forEach() => {
//     //where to add event listener? what type of listener?
//     pixelMark.addEventListener("mouseover", (event) => {
//        //what event do you want to happen?
//         pixelMark.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     });
//
// }

markBoard();
etchBoard();