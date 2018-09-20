var mic;
var soundLevel;
var nSoundLevel;
var t;
var fft;

function setup() {
	createCanvas(windowWidth, windowHeight);
	mic = new p5.AudioIn(); 
	mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
    colorMode(HSB, 360, 100,100);    
}

function draw() {
    background(0,0,0,10);
    var spectrum = fft.analyze();
    var maxSpectrum = 128;
    
    
    //Amplitude를 받아오자! https://p5js.org/reference/#/p5.AudioIn
	soundLevel = mic.getLevel();
	    // map(value, start1, stop1, start2, stop2, [withinBounds])
	nSoundLevel = map(soundLevel,0,0.1,windowHeight/16,windowHeight/2);
    for(i =0; i<maxSpectrum; i+=1){
        fill(100+50*spectrum[i],100,100);
        ellipse(windowWidth/2, windowHeight/2, nSoundLevel-i);
    }
}