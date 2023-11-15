/* PSEUDO-CODE
* default board: 16 x 16
*
*/

let board = document.querySelector('#board');
let squareNumber = 256;
const MIN_SQUARE_NUMBER = 100;
const MAX_SQUARE_NUMBER = 10000;
// let pixelMarkNodeList = board.querySelectorAll('.pixel');
// let pixelMarkArray = Array.from(pixelMarkNodeList);
//
// document.addEventListener("DOMContentLoaded", () => {
//
// })
function makeBoard() {
    let squares = document.querySelectorAll(".pixel");
    //how to remove all divs, then add in new ones based on user input?
    //get the length of the elements, then remove them
    for (let i = 0; i < squares.length; i++) {
        squares[i].remove();
    }

    //add squares
    for (let i = 0; i < squareNumber; i++) { //possible to change the condition based on user input? yes
        let boardPixel = document.createElement('div');
            boardPixel.classList.add(`pixel`);
            board.appendChild(boardPixel);
        }

    board.addEventListener("mouseover", (event) => {
        //let colorPixel = document.querySelector('.pixel');
        event.target.classList.add(`colored`);
        //add colored class to every div, which uses the set background color from .css file
    })

    let boardHeight = board.offsetHeight;
    let boardWidth = board.offsetWidth;
    let boardColumns;
    let boardRows;

}

function inputCustomGrid() {
     //let pixelMarkInputNumber = Number(window.prompt("What board size would you like? (min: 10 & max: 100"));
     const customGridButton= document.getElementById('input-size');
     customGridButton.addEventListener("click", () => {
       let gridNumber = Number(window.prompt("What grid size would you like? (min: 10 & max: 100)"));
       //perform math operation: "number input by user" times itself/exponent
         squareNumber = gridNumber ** 2;
         makeBoard();
       //prompt again in case user inputs letters, not numbers
     })

 }

// console.log(pixelMarkNodeList);
// what is the array for?
// way to differentiate the pixels: append a number to the class of each individual square div
// add another class instead of adding a number; didn't work, implementation is too complex
// misunderstood intention of array: arrays ..., my implementation seems to not need arrays at the time of writing

// EXTRA CREDIT 1: each interaction should randomize the square's RGB value entirely
// function random(number) {
//     return Math.floor(Math.random() * (number + 1));
// }

/*
 EXTRA CREDIT 2: implement a progressive darkening effect; each interaction
 adds 10% more black/color to the square. achieve a complete (100%) black square
 only after 10 interactions
 */

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

inputCustomGrid();