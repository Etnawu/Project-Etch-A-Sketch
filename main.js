//Populate the grid with squares
function populateBoard(size) {
    let board = document.querySelector("#squareContainer");
    let squares = board.querySelectorAll("div");
    squares.forEach((div => div.remove()));
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let fragment = document.createDocumentFragment();
    let grid = size * size;

    for (let i = 0; i < grid; i++){
        let square = document.createElement('div');
        square.className = "square";
        fragment.appendChild(square);
    }
    board.appendChild(fragment);
}

//Changes grid size based on user input
function changeSize(input) {
    const size = parseInt(input);
    if (isNaN(size) || size < 1 || size > 100) return;
    populateBoard(size);
}

//Clear All button
function clearAllColor() {
    let squares = document.querySelector("#squareContainer").querySelectorAll('div');
    squares.forEach(square => {
        square.classList.remove('coloredSquare');
        square.style.backgroundColor = "";
    });
}

//Event listeners for drawing and controls
document.addEventListener("DOMContentLoaded", () => {
    let clearBtn = document.getElementById("clearAll");
    let eraserBtn = document.getElementById("eraserBtn");
    let isDrawing = false;
    let currentColor = "#000000";
    let isEraserActive = false;
    let lastSelectedColor = "#000000";
    let board = document.querySelector("#squareContainer");
    let colorPicker = document.getElementById("colorPicker");
    let gridSizeSelect = document.getElementById("gridSizeSelect");

    colorPicker.value = "#000000";
    eraserBtn.classList.remove("active");

    colorPicker.addEventListener("input", (e) => {
        currentColor = e.target.value;
        lastSelectedColor = currentColor;
        
        if (isEraserActive) {
            isEraserActive = false;
            eraserBtn.classList.remove("active");
        }
    });

    eraserBtn.addEventListener("click", () => {
        isEraserActive = !isEraserActive;

        if (isEraserActive) {
            lastSelectedColor = currentColor;
            currentColor = "#ffffff"; // Or your board background color
            eraserBtn.classList.add("active");
        } else {
            currentColor = lastSelectedColor;
            eraserBtn.classList.remove("active");
        }
    });

    gridSizeSelect.addEventListener("change", (e) => {
        changeSize(e.target.value);
    });

    clearBtn.addEventListener("click", clearAllColor);

    board.addEventListener("mouseover", (e) => {
        if (isDrawing && e.target.classList.contains("square")) {
            e.target.classList.add("coloredSquare");
            e.target.style.backgroundColor = currentColor;
        }
    });

    board.addEventListener("mousedown", (e) => {
        if (e.target.classList.contains("square")) {
            isDrawing = true;
            e.target.classList.add("coloredSquare");
            e.target.style.backgroundColor = currentColor;
        }
    });

    document.addEventListener("mouseup", () => {
        isDrawing = false;
    });

    populateBoard(16);
});
