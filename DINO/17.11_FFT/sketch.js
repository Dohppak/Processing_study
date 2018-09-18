// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/2O3nm0Nvbi4
//
//var song;
//var fft;
//var button;
//
//function toggleSong() {
//  if (song.isPlaying()) {
//    song.pause();
//  } else {
//    song.play();
//  }
//}
//
//function preload() {
//  song = loadSound('sound.mp3');
//}
//
//function setup() {
//  createCanvas(windowWidth, windowHeight);
//  colorMode(HSB);
//  angleMode(DEGREES);
//  button = createButton('toggle');
//  button.mousePressed(toggleSong);
//  song.play();
//  fft = new p5.FFT(0.8, 128);
//}

var mic, fft;


var bands = 128;
var smoothingFactor = 0.2;
//var sum = [];  
var scale = 2;
var barWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  angleMode(DEGREES);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.8, 128);
  fft.setInput(mic);
    
}


function draw() {
  background(0);
  var spectrum = fft.analyze();
  console.log(spectrum);
  stroke(255);
  noStroke();
  translate(width /2, height /2);
  //beginShape();
  for (var i = 0; i < spectrum.length; i++) {
    var angle = map(i, 0, spectrum.length, 0, 360);
    var amp = spectrum[i];
    var r = map(amp, 0, 256, 20, 100);
    //fill(i, 255, 255);
    var x = r * cos(angle);
    var y = r * sin(angle);
    stroke(i, 255, 255);
    line(0, 0, x, y);
    //vertex(x, y);
    //var y = map(amp, 0, 256, height, 0);
    //rect(i * w, y, w - 2, height - y);
  }
  //endShape();


}
