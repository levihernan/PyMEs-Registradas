function changeDonuts(provincia) {
  svg = d3.select("#donut");
  change(provincia.size);
  svg = d3.select("#donut2");
  change(provincia.sector);
  svg = d3.select("#donut3");
  change(provincia.empleador);
}
