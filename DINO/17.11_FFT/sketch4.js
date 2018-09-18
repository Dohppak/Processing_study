var mic, fft;


var bands = 128;
var smoothingFactor = 0.2;
//var sum = [];  
var scale = 2;
var barWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);

  barWidth = width/float(bands)/4;

  //for(var i=0; i<bands; i++){
  //  sum[i] = 0;
  //}

  colorMode(HSB, 255);
  noStroke();
}

function draw() {
  background(0);

  var spectrum = fft.analyze();
  translate(width/2, height/2);

  var bands_mod = bands/4;
  for (i = 0; i<bands_mod+1; i++) {
    rotate((1.0)/bands_mod*2*PI);

    //sum[i] += (fft.spectrum[i] - sum[i]) * smoothingFactor;

    var c = color(map(i, 0, bands_mod, 0, 255), 200, 255);
    fill(c);
    //rect(barWidth, barWidth, barWidth, sum[i]*height*scale*i);
    rect(barWidth, barWidth, barWidth, map(spectrum[i], 0, 255, 0, height/50)*i);
  }
}