let x = 0;

function setup() {
  createCanvas(400, 200);
  noStroke();
}

function draw() {
  background(255);
  // Dibujar varias esferas naranjas en el fondo
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    fill(255, 165, 0, 150); // tono anaranjado semi-transparente
    ellipse(x, y, random(10, 20));
  }
}