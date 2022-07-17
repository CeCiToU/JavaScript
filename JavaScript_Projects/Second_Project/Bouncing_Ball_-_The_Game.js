let speedRate = 100;
let speedX = 3;
let speedY = 3;
let x;
let y;
let extraCanvas;
let points = 0;

function setup() {
  createCanvas(600, 400);
  extraCanvas = createGraphics(600, 400);
  extraCanvas.background(255, 219, 98);
  x = width / 2;
  y = height / 2;
  let str = "GAME OVER";
  extraCanvas.textSize(36);
  extraCanvas.textAlign(CENTER, BOTTOM);
  extraCanvas.text(str, width / 2, height / 2);
  let strPoint = "Points: " + points;
  extraCanvas.textSize(24);
  extraCanvas.textAlign(CENTER,TOP);
  extraCanvas.text(strPoint, width/2, height/2);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(8);
  
  line(10, mouseY - 40, 10, mouseY + 40);
  line(width - 10, mouseY - 40, width - 10, mouseY + 40);
  
  noStroke();
  circle(x, y, 25);
  if (y >= height - 25) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    speedY = -3;
    speedRate += 10;
  } else if (y <= 0) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    speedY = 3;
    speedRate += 10;
  }

  if (x + 1 == 25) {
    if (y <= mouseY + 40 && mouseY - 40 <= y) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      speedX = 3;
      points = points + 1;
       print("points = " + points);
      speedRate += 10;
    }
  } else if (x + 2 == width - 25) {
    if (y <= mouseY + 40 && mouseY - 40 <= y) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      speedX = -3;
      points = points + 1;
      print("points = " + points);
      speedRate += 10;
    }
  }

  x += speedX;
  y += speedY;
  speedRate++;
  frameRate(speedRate);
  if (x > width + 15 || x < -15) {
    speedX = 0;
    speedY = 0;
  }
  if (speedX == 0) {
    image(extraCanvas, 0, 0);
  }
}
