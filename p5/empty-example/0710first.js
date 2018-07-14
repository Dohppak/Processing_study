function setup() {
    createCanvas(1920, 1080);
    background(255,0,255);
    }

function draw() {
    if (mouseIsPressed) {
        fill(0);
        stroke(255);
    } 
    else {
        fill(255);
        stroke(0);
    }
    ellipse(mouseX, mouseY, 80, 80);
    console.log(frameCount);
}