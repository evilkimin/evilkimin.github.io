var ptags = document.getElementsByTagName('p');
console.log(ptags);

for(item of ptags){
    console.log(item);
    item.innerHTML = 'check console log for other array';
}

// ref: My awesome professor, Mr. Tindale. Class: March 3rd, 2025. Here I am showing a "generic concept"

var yummyFruit = [];
yummyFruit = ['apple', 'strawberry', 'watermelon', 'grape']
console.log(yummyFruit)
yummyFruit.push('cheese', 'leaf', 'chiikawa')

//ref: Also professor Tindale :) 

var fallBall = 20;
var positions = [];
var speed = [];

function setup(){
   createCanvas(600,600);

}

function manyDrop(){
    for(var i = 0; i < fallBall; i++){
        ellipse(mouseX, mouseY, 16, 16);
        
        
        positions[i] = random(height);
        translate(mouseX, positions[i]);
        //pop();
        //positions[i] +=speeds[i];
        //positions[i] = positions[i] % height;

   }
}

function draw(){
    background('lightpink');
    ellipse(mouseX, mouseY, 16, 16);
    manyDrop();
}



// This was given up on half way. I tried to make a mouseX, mouseY ball
// that leaks balls. However, trying to make the animation was a bit
// confusing, and when i looked up tutorials, I was not seeing
// things you taught. I tried scrapping code from our confetti
// project, but adding more and more seemed to confuse the code and
// would get rid of my screen. I did the bare minimum but I am sad that
// I could not figure out my ball animation.