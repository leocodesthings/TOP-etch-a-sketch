let board = document.querySelector('#board');

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

etchBoard();