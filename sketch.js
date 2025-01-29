function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 150, 180);
  
  //fish body
  stroke("black");
  fill("orange");
  triangle(300, 200, 300, 100, 200, 150);
  ellipse(175, 150, 125, 100);
  
  // eye 1
  stroke("black");
  fill("white");
  ellipse(140, 150, 25, 25);
  
  // eye 2
  stroke("black");
  fill("black");
  ellipse(140, 150, 10, 10);
  
  // fin 1 
  strokeWeight(2);
  fill("orange");
  triangle(190, 180, 190, 160, 170, 150);
  
  // Sand
  noStroke();
  fill("wheat"); 
  rect(0, 300, 400, 300);
  
  

}

