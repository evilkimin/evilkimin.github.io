var button;
var button2;


function setup(){
    createCanvas(windowWidth, windowHeight);
    button = createButton('catch me if you can');
    button.position(500,440);
    button.show()

button2 = createButton('oh no you got me!!');
    button2.position(670,800);
    button2.hide();
    button2.mousePressed(function(){
        button2.hide();
        button.show();
    });

    button.mousePressed(function(){
        button2.show();
        button.hide();

    });

    //there were some things deleted that might make my callbacks look a little wonky. i was frustrated
    
    //button2.onclick(function(){
      //  colourChange2();
    //})
}

function draw(){
    background('tomato');
    if(mouseIsPressed){
        background('yellow')
    }
    text('i cant get my call backs to work!! please help', 100,100);
   // if(mousePressed){
  //      colourChange();
  //  }
}

//var thecolour = 0;

//function colourChange(){
  //  thecolour = (thecolour + 1) % 3;
    //if(thecolour === 0){
      //  background() = 'tomato';
    //}
    //if(thecolour === 1){
      //  background() = 'aquamarine';
    //}
    //if(thecolour === 2){
      //  background() = 'yellow';
    //}
//}
//TRIED TO MAKE CALL BACK BUT IT DIDNT WORK. ADVICE???

//function colourChange2(){
    //background('pink')
//}
