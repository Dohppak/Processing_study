var w;
var distribution = new Array(360);

function setup() {
	createCanvas(windowWidth, windowHeight);
	w = new Walker();
	for (var i = 0; i < distribution.length; i++) {
		distribution[i] = floor(randomGaussian(0,10));
	}
}

function draw() {
	background(20);
	translate
	w.update();
	w.display();
}

function Walker(){
	this.pos = createVector(width/2, height/2);
	this.vel = createVector(0,0);
	//this.acc = createVector(0.1,0.1);
	
	this.update = function(){
		var mouse =createVector(mouseX, mouseY);
		this.acc = p5.Vector.sub(mouse, this.pos);
		this.acc.setMag(0.1);
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}
	
	this.display = function(){
		translate(width/2, height/2);
		for (var i = 0; i<distribution.length; i++){
			rotate(TWO_PI / distribution.length);
			stroke(255);
			var dist = abs(distribution[i]);
            var mousedistx = dist + mouseX;
            var mousedisty = dist + mouseY;
			line(0,0,mousedistx,mousedisty);
		}
	}
	
}