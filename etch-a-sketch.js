let board = document.querySelector('#board');
// let pixelMarkNodeList = board.querySelectorAll('.pixel');
// let pixelMarkArray = Array.from(pixelMarkNodeList);
//
// document.addEventListener("DOMContentLoaded", () => {
//
// })
function etchBoard() {
    for (let i = 0; i < 256; i++) {
        let boardPixel = document.createElement('div');
            boardPixel.classList.add(`pixel`);
            board.appendChild(boardPixel);
        }

    board.addEventListener("mouseover", (event) => {
        //let colorPixel = document.querySelector('.pixel');
        event.target.classList.add(`colored`);
        //add colored class to every div, which adds black background color from .css file
    })
}

//console.log(pixelMarkNodeList);
//what is the array for?
//way to differentiate the pixels: append a number to the class of each individual square div
//add another class instead of adding a number

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

//
// function markBoard() {
//     board.addEventListener("mouseover", () => {
//
//         // for (let pixel of pixelMarkArray) {
//         //     console.log(pixel);
//         //     pixel.style['background-color'] = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//         // }
//         //querySelector only targets the first element with the given selector, does not target all
//         //querySelectorAll is a node list; convert to array
//
//         //pixelMark.style['background-color'] = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//         //document.body.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     })
// }

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

//markBoard();
etchBoard();