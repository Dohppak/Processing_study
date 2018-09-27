var song;
var amp;
var button;
var mic, fft
var volhistory = [];


function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    
    mic = new p5.AudioIn();
    mic.start();
    amp = new p5.Amplitude();
}

function draw() {
  background(0);
  var vol = amp.getLevel();
  volhistory.push(mic);
  stroke(255);
  noFill();

  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, 1, 5, 10);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }
  ellipse(100, 100, 200, vol * 200);
}
