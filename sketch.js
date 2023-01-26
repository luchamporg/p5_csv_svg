//Función para cargar archivos
let data;
function preload() {
  data = loadTable("./src/30canciones.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight, SVG);

  //Verifica que se cargan los datos del CSV
  print(data.rows);
}

function draw() {
  circle(mouseX, mouseY, 20);
}
