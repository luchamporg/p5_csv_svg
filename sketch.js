//Variables para crear las celdas de las tablas
let cellWidth;
let cellHeight;
const margen = 200;

//Variable para cargar los datos del CSV
let data;

//Función para cargar archivos
function preload() {
  data = loadTable("./src/30canciones.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight, SVG);

  //El ancho de la pantalla dividido para el número de columnas
  cellWidth = (width - margen) / data.columns.length;

  //El alto de la pantalla dividido para el número de filas
  cellHeight = (height - margen) / data.rows.length;

  //Verifica que se cargan los datos del CSV
  print(cellWidth, cellHeight);
}

function draw() {
  //circle(mouseX, mouseY, 20);

  for (let i = 0; i < data.columns.length; i++) {
    const x = i * cellWidth + margen / 2;
    for (let j = 0; j < data.rows.length; j++) {
      const y = j * cellHeight + margen / 2;
      fill(125);
      noStroke();
      //circle(x, y, 10);
      const d = data.rows[j].arr[i];
      text(d, x, y);
    }
  }

  noLoop();
}
