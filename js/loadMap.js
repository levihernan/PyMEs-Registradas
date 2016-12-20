//Map dimensions (in pixels)
console.log("drawing map");
var width = $('#map').width(),
    height = 600;

//Map projection
var projection = d3.geo.transverseMercator()
                       .center([2.5, -38.5])
                       .rotate([66, 0])
                       .scale((height * 56.5) / 33)
                       .translate([(width/2), (height / 2)]);

//Generate paths based on projection
var path = d3.geo.path()
    .projection(projection);

//Create a tooltip, hidden at the start
var tooltip = d3.select("#map").append("div").attr("class","tooltipMap");

//Create an SVG
var svg = d3.select("#map").append("svg")
  .attr("id","svg0")
   .attr("width", width)
   .attr("height", height);
    // .attr("viewBox", "0 0 600 378")
    // .attr("perserveAspectRatio","xMinYMid");

//Group for the map features
var features = svg.append("g")
    .attr("class","features");

//Create choropleth scale
var color = d3.scale.quantize()
    .domain([0,1])
    .range(d3.range(3).map(function(i) { return "q" + i + "-3"; }));



// d3.json("http://www.produccion.gob.ar/wp-content/uploads/2016/12/registropymes/js/argentina.geojson",function(error,geodata) {
d3.json("js/argentina.geojson",function(error,geodata) {
  if (error) return console.log(" error viejaaaa"); //unknown error, check the console

  //Create a path for each map feature in the data
  features.selectAll("path")
    .data(geodata.features)
    .enter()
    .append("path")
    .attr("d",path)
    .attr("style", "fill:rgb(49, 130, 189);cursor:pointer;")

    .on("mouseover",function(d){

      console.log("data is");
      console.log(d);

      hoveredPath = d3.select(this);
      console.log(hoveredPath);

      pos = hoveredPath[0][0].getBoundingClientRect();
      console.log("posTop: "+ pos.top);
      console.log("posLeft: "+ pos.left);

      showTooltip(d,pos);
      hoveredPath.style('fill','rgb(32, 94, 140)');
      
      provincia = d.properties.provincia.toLowerCase().replaceAll(" ","_");
      console.log(provincia);

      //Uso el objeto grande y mando la variable string que sale de arriba como selector o provincia_data.provincia
      changeDonuts(provincias_data[provincia]);

    })
    .on("mousemove", function(d){
      // moveTooltip();

    })
    .on("mouseout",function(d){

      hideTooltip();
      hoveredPath = d3.select(this);
      hoveredPath.style('fill','rgb(49, 130, 189)');
    })
    .on("click",clicked);

});

//Position of the tooltip relative to the cursor
var tooltipOffset = {x: -790, y: -135};

//Create a tooltip, hidden at the start
function showTooltip(d,pos) {
  // moveTooltip(d,pos);
  console.log(d.properties.provincia);
  tooltip.style("display","block")
      .text(d.properties.provincia);

  tooltip.style("top",(pos.top+tooltipOffset.y)+"px")
     .style("left",(pos.left+tooltipOffset.x)+"px");

}

//Move the tooltip to track the mouse
function moveTooltip(d,pos) {
  console.log("Inside showTooltip");
  console.log(pos.top);
  console.log(pos.left);
}

//Create a tooltip, hidden at the start
function hideTooltip() {
  tooltip.style("display","none");
}



// Add optional onClick events for features here
// d.properties contains the attributes (e.g. d.properties.name, d.properties.population)
function clicked(d,i) {

}


String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
