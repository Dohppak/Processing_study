  import ddf.minim.*; 
  import ddf.minim.analysis.*;  
  Minim minim;   
  FFT fft;  
  AudioInput in;   
  float amp = 15; // used to make signal stronger/weaker 
  float ampWave = 10*amp; 
  float avgAudio; // store avg volume globally 
  
  float bass; 
  float high; 
  
  float x;
  float y;

void setup(){
  minim = new Minim(this); // initalize in setup 
  in = minim.getLineIn(Minim.STEREO, 512); // audio in + bufferSize 512 or 1024 
  fft = new FFT(in.bufferSize(), in.sampleRate());  
  fft.logAverages(22, 3); // 3 = 30, 4 = 40, slices of frequency
  
  size(640,360);
  background(255);
}

void keyPressed(){
  fft.forward(in.mix); // IMPORTANT! -update for FFT anaylsis
  
  bass = fft.calcAvg(20,800)*amp; // fft.calcAvg(minFreq, maxFreq)  
  high = fft.calcAvg(800,10000)*amp;
  
  println(bass+" / "+high);
}

void draw(){
  x = bass;
  y = high;
  
  strokeWeight(2);
  point(x, y);
}
