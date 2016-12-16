function changeDonuts(provincia) {
  var svg = d3.select("#donut");
  change(provincia.size);
  var svg = d3.select("#donut2");
  change(provincia.sector);
  var svg = d3.select("#donut3");
  change(provincia.empleador);
}
