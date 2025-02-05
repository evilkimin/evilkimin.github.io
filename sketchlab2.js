function setup(){
    createCanvas(800,850);
}

function draw(){
    background('lightpink');
    blocky.draw();
    blocky.move();
}

var blocky = {
    x: 12,
    y: 0,
    w: 550,
    h: 560,
    xSpeed: 20,
    ySpeed: 20,
    colour: 'lightgreen',
    draw: function(){ 
        fill(blocky.colour);
        rect(blocky.x, blocky.y, blocky.w, blocky.h);
    },
    move: function(){
        blocky.x += blocky.xSpeed;
        blocky.y += blocky.ySpeed;
        if(blocky.x < 0 || blocky.x > width - blocky.w){
            blocky.xSpeed *= -1;
        }
        if(blocky.y < 0 || blocky.y > height - blocky.h){
            blocky.ySpeed *= -1;
        }
        }
    }