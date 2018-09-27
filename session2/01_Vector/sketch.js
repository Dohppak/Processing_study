var particle;

function setup(){
    createCanvas(windowWidth, windowHeight);
    particle = new Particle();
}

function draw(){
    background(30);
    var wind = createVector(0.15,0);
    var gravity = createVector(0,0.1);
    particle.applyForce(gravity);
    
    if (mouseIsPressed){
        particle.applyForce(wind);
    }
    particle.update();
    particle.edges();
    particle.display();
}