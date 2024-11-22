let n = 10;
let color1, color2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  color1 = color(0, 128, 255);
  color2 = color(255, 221, 0);
  noStroke();
}

function draw() {
  background(240);

  let squareWidth = width / n;
  let squareHeight = height / n;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let t = (i + j) / (2 * (n - 1));
      let currentColor = lerpColor(color1, color2, t);
      fill(currentColor);
      rect(i * squareWidth, j * squareHeight, squareWidth, squareHeight);
    }
  }
}