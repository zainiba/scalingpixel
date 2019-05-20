let angle = 0;
let hue = 0;
let diameter = 80;
let heightChange = 10 * 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 255);
}

function draw() {




  fill(hue, 255, 255);
  hue += .5;
  if (hue > 255) hue = 0;

  clear();
  noStroke();
  let d1 = 10 - (sin(angle) * diameter) / 2 + diameter / 2;
  let d2 = 10 - (sin(angle + PI / 2) * diameter) / 2 + diameter / 2;
  let d3 = 10 - (sin(angle + PI) * diameter) / 2 + diameter / 2;
  //let d4 = 10 - (sin(angle + PI / 4) * diameter) / 4 + diameter / 2;

  for (let y = 0; y < height; y += heightChange) {
    for (let x = 0; x < width; x += 15*7) {
      rect(x, y, d1, d1);
    }
  }

  for (let y = 90; y < height; y += heightChange) {
    for (let x = 0; x <width; x += 15*7) {
      rect(x, y, d2, d2);
    }
  }

  for (let y = 180; y <height; y += heightChange) {
    for (let x = 0; x < width; x += 15*7) {
      rect(x, y, d3, d3);
    }
  }

  angle += 0.02;

}



//  rect(x, y, d1, d1);
//  rect(x, y, d2, d2);
//  rect(x, y, d3, d3);
