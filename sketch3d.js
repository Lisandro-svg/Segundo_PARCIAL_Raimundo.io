// sketch3d.js

// Variables globales
let angle = 0;

function setup() {
  // Crear el canvas en un div con id "seccion-1"
  let container = document.getElementById('seccion-1');
  let cnv = createCanvas(400, 400, WEBGL);
  cnv.parent(container);
  noStroke();
}
function draw() {
  background(255);
  lights();

  push();
  rotateY(angle);
  fill(255, 165, 0); // color naranja
  sphere(100);
  pop();

  angle += 0.01; // rotación continua
}