grid = 16

for (let i = 0; i < grid*grid; i++){

let square = document.createElement('div');
square.className = "square";
document.getElementById("squareContainer").appendChild(square);
square.addEventListener("mouseover", change => change.target.classList.add('coloredSquare'));

}



















function clearAllColor() {
    let square = squareContainer.querySelectorAll('div');
    square.forEach(change => change.classList.remove('coloredSquare'));
}


let clearBtn = document.getElementById("clearAll");
clearBtn.addEventListener("click", clearAllColor);


