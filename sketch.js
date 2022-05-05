
let gap = 10;
let cirNum = 80;
let centerSize = 30;
let ptNum = 100;
let angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(degrees);
  song = loadSound('comeincloser_trimmed.wav');
}

function draw() {
  background(11, 16, 19);
  noCursor();
  fill(215, 196, 187);
  noStroke();
  square(mouseX, mouseY, 10);

  //interactive album cover
  push();
  translate(width/2, height/2);
  rotate(angle)
  angle = map(mouseX, 0, width, -20, 20);
  noFill();
  stroke(215, 196, 187);
  strokeWeight(1);
 for(let i=0; i<40; i++){
   arc(0, 0, centerSize+gap*i, centerSize+gap*i, angle/i, 360-angle/2)
 }
  pop();
  
//whitenoise 
  stroke(215, 196, 187);
  strokeWeight(1);
  for(let i=0; i<ptNum; i++){
      point(random(width), random(height))
  }
 
    
//album title
  push();
  textFont('Georgia');
  textSize(20);
  textAlign(CENTER, CENTER);
  text('Come In Closer', windowWidth/2, 50);
  textSize(15);
  textFont('Helvetica')
  noStroke();
  text('Rhye', windowWidth/2, 75);
  pop();
}


//play music
function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    background(255);
  } else {
    song.play();
  }
}



