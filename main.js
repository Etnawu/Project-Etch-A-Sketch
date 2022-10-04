//function to make squares in square container
function populateBoard(size) {
    let board = document.querySelector("#squareContainer");
    let squares = board.querySelectorAll("div");
    squares.forEach((div => div.remove()));
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let grid = size*size;
    for (let i = 0; i < grid; i++){
        let square = document.createElement('div');
        square.className = "square";
        document.getElementById("squareContainer").appendChild(square);
        square.addEventListener("mouseover", change => change.target.classList.add('coloredSquare'));
    }
}

//state of board when the site is first opened
populateBoard(16)

//function to change square container size
function changeSize(input) {
    populateBoard(input)
}

//function to erase everything
function clearAllColor() {
    let square = squareContainer.querySelectorAll('div');
    square.forEach(change => change.classList.remove('coloredSquare'));
}

let clearBtn = document.getElementById("clearAll");
clearBtn.addEventListener("click", clearAllColor);

