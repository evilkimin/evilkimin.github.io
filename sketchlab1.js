function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background('lightpink');
    for(var i = 0; i < 900; i++){
        fill('#CCFFFF')
        stroke('white')
        rect((i*10)%width,(i*10)%height,10,10,10)
    }
}