
// The video
let video;
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/hSir63job/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
  myFont= loadFont('Inconsolata-Regular.ttf');
}


let up="";
let down="";
let open="";
let close="";
let two="";

function setup() {
  createCanvas(640, 520,WEBGL);
  pg = createGraphics(400, 250);
  video = createCapture(VIDEO);
  video.hide();


  // STEP 2: Start classifying
  classifyVideo();
 
}



// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}


function draw() {
  
  background(0);
  textSize(50);
  noFill();
  // stroke(255,255,255);
  text(label, 210, 250);

  // Draw the video
  // image(video, 0, 0);


  if (label == 'up') {
  // circle(200, 200, 200);
  // noFill()
  // stroke('rgb(0,255,0)');
  // strokeWeight(4);
    {rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    plane(300);
    noFill()
    stroke(color(0, 0, 255));
    strokeWeight(4);}
    
    {rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    plane(500);
    noFill()
    stroke(color(0, 0, 255));
    strokeWeight(4);
    translate(30, 20);}
    
    {rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    plane(500);
    noFill()
    stroke(color(0, 0, 255));
    strokeWeight(4);
    translate(-30, -20);}
    
  } 
  
  if (label == 'down') {
    // translate(500, height * 0.35, -200);
    {sphere(100);
    noFill();
    stroke('rgba(100%,0%,100%,0.5)');
    strokeWeight(4);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);}
    
    {sphere(200);
    noFill();
    stroke('rgba(100%,0%,100%,0.5)');
    strokeWeight(4);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    translate(500, height * 0.35, -200);}
    
    
  } if (label == 'two') {
    {rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cone(140, 170);
    noFill()
    stroke('rgb(0,255,0)');
    strokeWeight(4);}
    
    {rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cone(340, 370);
    noFill()
    stroke('rgb(0,255,0)');
    strokeWeight(4);
    translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
    translate(130, 120);}
    
    
  } if (label == 'open') {
    {rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(200);
    stroke('rgb(193,255,255)');
    strokeWeight(4);}
    
    {rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(300);
    stroke('rgb(193,255,255)');
    strokeWeight(4);
    translate(width / 2, height / 2);
    translate(p5.Vector.fromAngle(millis() / 1000, 40));
    translate(30, 20);}
  
  }
  
 if (label == 'close') {
   {rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cylinder(120, 150);
    noFill();
    stroke('rgb(255,131,0)');
    strokeWeight(4);}
   {rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cylinder(200, 350);
    noFill();
    stroke('rgb(255,131,0)');
    strokeWeight(4);
    translate(30, 20);}
    
  }
  
  textSize(60);
  textAlign(CENTER, CENTER);
  fill(255,255,255);
  text(label, width / 2, height - 16);

}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  classifyVideo();
}
