for (let i = 0; i < 256; i++){

let square = document.createElement('div');
square.className = "square";
document.getElementById("squareContainer").appendChild(square);
square.addEventListener("mouseover", draw, false);

function draw(){
    
    square = document.getElementsByClassName("square");
    square.SetAttribute("style","background:blue;")
    return
}
}



