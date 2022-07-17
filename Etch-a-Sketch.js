function addDiv(num){
    var numPow = num*num;
    for(let i =0; i < numPow; i++){
        var newDiv = document.createElement("div");
        // var textNode = document.createTextNode(i+1);
        // newDiv.appendChild(textNode);
        newDiv.classList.add("create");
        wrapDiv.appendChild(newDiv);  
    }
}

function grid(num){
    wrapDiv.style.display = "grid";
    wrapDiv.style.justifyContent = "center";
    wrapDiv.style.gridTemplateColumns = "repeat("+num+",1fr)";
    wrapDiv.style.gridTemplaterows = "repeat("+num+",1fr)";
}

function mouseCheck(e){
    isDOWN = true;
    console.log(isDOWN);
}
function mouseCheck2(e){
    isDOWN = false;
    console.log(isDOWN);
}
function color(e){
    if(isDOWN){
        e.target.style.background = "black";
    }
}
var num = prompt("Enter number");
var wrapDiv = document.getElementById("wrap");
var isDOWN = false;
addDiv(num);
grid(num);

for(let i = 0; i < wrapDiv.children.length; i++){
    wrapDiv.children[i].addEventListener("mousedown",()=>isDOWN = true);
    wrapDiv.children[i].addEventListener("mouseup",()=>isDOWN = false);
    wrapDiv.children[i].addEventListener("mousemove",color);
}