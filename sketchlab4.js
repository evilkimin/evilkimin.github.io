

function setup(){
    noCanvas();

    let beat = createAudio('/assets/noises.mp3');
    beat.showControls();

// https://p5js.org/reference/p5/createAudio/ link to make audio. however, my audio file wont cooperate

    let img = createImg(
        'https://i.pinimg.com/736x/f6/3c/d0/f63cd0f3eba1283ea3ea34d7f3fc0602.jpg',
    );
}

// https://p5js.org/reference/p5/createImg/ link to how to create image

function draw(){
}

