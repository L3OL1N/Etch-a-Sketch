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
        e.target.style.background = bgColor;
    }
}
function setUp(){
    num = prompt("Enter number");
    if(num<100){
       return num;
    }
    else{
        alert("Can't greater than 100.");
        setUp();
    }
}
var num = 4;
var wrapDiv = document.getElementById("wrap");
var inputColor = document.getElementById("penColor");
var fakeColor = document.getElementById("fakeColor");
var isDOWN = false;
var bgColor = "#000000";

setUp();
addDiv(num);
grid(num);

for(let i = 0; i < wrapDiv.children.length; i++){
    wrapDiv.children[i].addEventListener("mousedown",()=>isDOWN = true);
    wrapDiv.children[i].addEventListener("mouseup",()=>isDOWN = false);
    wrapDiv.children[i].addEventListener("mousemove",color);
}
function colorClick(e){
    bgColor = e.target.value;
    fakeColor.style.background = bgColor;
}

fakeColor.addEventListener("click",()=> inputColor.click());
inputColor.addEventListener("input",colorClick);

