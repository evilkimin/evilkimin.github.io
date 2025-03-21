// a submit box that takes text and once you hit submit it will display the name on the screen. The names will move around the screen like in lab 2
// CODE A TEXT BOX
// CODE A SUBMIT BUTTON THAT WILL INPUT THE TEXT ON SCREEN
//THE TEXT THAT SHOWS UP WILL AUTOMATICALLY START MOVING AROUND

let input;
let button;
let myText;
var texts = []

function textBubble(thetext){
   //make stuff about text moving
   var bubbleText = {
    text: thetext,
    pos: createVector (width/2, height/2),
    vel: p5.Vector.random2D(),
   draw: function(){
    text( this.text, this.pos.x, this.pos.y);
            this.pos.add(this.vel);
            if(this.pos.y < 0 || this.pos.y > height){
                var n = createVector(0,1);
                this.vel.reflect(n);
            }
            if(this.pos.x < 0 || this.pos.x > width){
                var n = createVector(1,0);
                this.vel.reflect(n);
            }
    }
   };
   texts.push(bubbleText);
}

function setup(){
    createCanvas(800,800);
    input = createInput('Type something!');
    myText = input.value();

    button = createButton('submit');
    button.mousePressed(submitText);
}


function draw(){
    background('antiquewhite')

    textAlign(CENTER);
    textSize(20);
    text(myText, width/2, height/2);

    //drawing the text
    for(t of texts){
        t.draw();
    }

} 

function submitText(){
    myText = input.value();

    textBubble( input.value() );

    //var bubbleText = {
        //pos: createVector (input.value("")),
        //vel: p5.Vector.random2D(),
        //draw: function(){
       // this.pos.add(this.vel);
           // if(this.pos.y < 0 || this.pos.y > height){
            //    var n = createVector(0,1);
           //     this.vel.reflect(n);
           // }
           // if(this.pos.x < 0 || this.pos.x > width){
           //     var n = createVector(1,0);
           //     this.vel.reflect(n);
           // }
        //}
       // }

}

// ref: creating the submit button > https://editor.p5js.org/enickles/sketches/occecAn4J
// ref: Prof. Tindale helped me put together the movement and I changed var text into var texts to make the words move. thank you. im going to cry now




// mousepressed start move function on text. how do we connect text with move


//text bubble object, in draw function draw text, string for whatever word is in it
//draw reflect, 
// in submit text, create text bubble, text bubble then has movement details
// in drawloop, make for loop about drawing
//make empty textbubble array
