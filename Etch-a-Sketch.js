function addDiv(num){
    var numPow = num*num;
    for(let i =0; i < numPow; i++){
        var newDiv = document.createElement("div");
        // var textNode = document.createTextNode(i+1);
        // newDiv.appendChild(textNode);
        newDiv.dataset.item = i;
        newDiv.classList.add("create");
        newDiv.style.opacity = 0.1;
        wrapDiv.appendChild(newDiv);
        arr.push(0);
    }
}
function grid(num){
    wrapDiv.style.display = "grid";
    wrapDiv.style.justifyContent = "center";
    wrapDiv.style.gridTemplateColumns = "repeat("+num+",1fr)";
    wrapDiv.style.gridTemplaterows = "repeat("+num+",1fr)";
}
function mouseCheckD(e){
    isDOWN = true;
    count = 1 ;
}
function mouseCheckU(e){
    isDOWN = false;
    count = 0 ;
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
function colorClick(e){
    bgColor = e.target.value;
    fakeColor.style.background = bgColor;
}

function countTime(e){
    let index = e.target.dataset.item;
    if(isDOWN){
        if(bgColor ===  rgb2hex(e.target.style.backgroundColor)){
            if (arr[index] <10){ 
                arr[index] += count;
            }
            e.target.style.opacity = arr[index]*0.1;  
        }
        else{
            e.target.style.opacity = 0.1;
        }    
    } 
}

let count = 0;
var arr=new Array;
var num = 4;
var wrapDiv = document.getElementById("wrap");
var inputColor = document.getElementById("penColor");
var fakeColor = document.getElementById("fakeColor");
var isDOWN = false;
var bgColor = "#000000";
const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`

setUp();
addDiv(num);
grid(num);

for(let i = 0; i < wrapDiv.children.length; i++){
    wrapDiv.children[i].addEventListener("mousedown",mouseCheckD);
    wrapDiv.children[i].addEventListener("mouseup",mouseCheckU);
    wrapDiv.children[i].addEventListener("mousemove",color);
    wrapDiv.children[i].addEventListener("mouseover",countTime);
}

fakeColor.addEventListener("click",()=> inputColor.click());
inputColor.addEventListener("input",colorClick);

