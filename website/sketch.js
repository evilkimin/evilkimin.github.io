var x = 0;
var y = 0;
function setup(){
    createCanvas(720,200);
}

function draw(){
    background('#FFC1CC');
    rect(x,y,10,10);
    x = x + 1;
    x = x % 700; // modulo operator
    y = y + 1;
    y = y % 170;
}