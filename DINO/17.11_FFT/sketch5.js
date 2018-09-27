var mic, fft;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  colorMode(HSB, 360);
    var C_radius = min(widowWidth, windowHeight)/2;
    var cx = widowWidth /2;
    var cy = windowHeight /2;
}

function draw() {
    background(0);
    var spectrum = fft.analyze();
    var circRad = 300;
    var circThick = 10;
    var maxSpectrum = 128; //spectrum.length
    for (int a=0; a<360; a+=3){
        var angle = radians(a);
        var x = cx+cos(angle)+C_radius;
        var y = cy+sin(angle)+C_radius;
    }
    
  
  for(i = 0; i < maxSpectrum; i+=1) {
    var circi = map(i, 0, maxSpectrum, 0, 360);
    var dist = spectrum[i]; 
  }  
}

function CircleX(degrees, radius) {
	return sin(radians(degrees))*radius/2;
}
 
function CircleY(degrees, radius) {
	return cos(radians(degrees))*radius/2;
}