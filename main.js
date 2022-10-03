for (let i = 0; i < 256; i++){

let square = document.createElement('div');
square.className = "square";
document.getElementById("squareContainer").appendChild(square);

square.addEventListener("mouseover",  
    change => change.target.classList.add('coloredSquare')
);

}

