function load_map(){

    // ------------ Variables con data provisoria. Se inicia con argentina---------//
    totalPymes_ARG = provincias_general_data.total.universe;
    porcPymes_ARG = provincias_general_data.total.percent;

    $('#provPymes').html("Argentina");

          totalPymes = provincias_general_data.total.universe;
          var pymesCountUp = new CountUp("totalPymes", 0, totalPymes_ARG, 0, 0.5);
          pymesCountUp.start();

          porcPymes = provincias_general_data.total.percent;
          var pymes_porCountUp = new CountUp("porcPymes", 0, porcPymes_ARG*100, 0, 0.5);
          pymes_porCountUp.start();

          totalPymes_var = totalPymes_ARG;
          porcPymes_var = porcPymes_ARG;

    // -------------------------------------------------------------------------//

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



    d3.json("js/argentina.geojson",function(error,geodata) {
      if (error) return console.log("Error loading data"); //unknown error, check the console
      //Create a path for each map feature in the data
      features.selectAll("path")
        .data(geodata.features)
        .enter()
        .append("path")
        .attr("d",path)
        .attr("style", "fill:rgb(49, 130, 189);cursor:pointer;")

        .on("mouseover",function(d){

          hoveredPath = d3.select(this);
          console.log(hoveredPath);

          pos = hoveredPath[0][0].getBoundingClientRect();
          console.log("posTop: "+ pos.top);
          console.log("posLeft: "+ pos.left);

          // showTooltip(d,pos);
          hoveredPath.style('fill','rgb(32, 94, 140)');

          /* ------------- ACTUALIZO CUADRITO --------------------*/
          provincia = d.properties.provincia.toLowerCase().replaceAll(" ","_");
          console.log(provincia);

          /* ------------- ACTUALIZO CUADRITO --------------------*/
          nombreProvincia = d.properties.provincia;
          if(nombreProvincia === 'Santiago del Estero'){
            nombreProvincia = 'Sgo. del Estero'
          }if(nombreProvincia === 'Rio Negro'){
            nombreProvincia = 'Río Negro'
          }if(nombreProvincia === 'Cordoba'){
            nombreProvincia = 'Córdoba'
          }if(nombreProvincia === 'Entre Rios'){
            nombreProvincia = 'Entre Ríos'
          }if(nombreProvincia === 'Neuquen'){
            nombreProvincia = 'Neuquén'
          }
          $('#provPymes').html(nombreProvincia);


          totalPymes = provincias_general_data[provincia].universe;
          var pymesCountUp = new CountUp("totalPymes", totalPymes_var, totalPymes, 0, 0.5, options);
          pymesCountUp.start();

          porcPymes = provincias_general_data[provincia].percent;
          var pymes_porCountUp = new CountUp("porcPymes", porcPymes_var*100, porcPymes*100, 0, 0.5, options);
          pymes_porCountUp.start();
          $('#porcBar').css('width', porcPymes*100+'%');
          totalPymes_var = totalPymes;
          porcPymes_var = porcPymes;

          //Uso el objeto grande y mando la variable string que sale de arriba como selector o provincia_data.provincia
          changeDonuts(provincias_data[provincia]);

        })
        .on("mousemove", function(d){
          // moveTooltip();

        })
        .on("mouseout",function(d){


          hoveredPath = d3.select(this);
          hoveredPath.style('fill','rgb(49, 130, 189)');

          /*-------------VUELVO CONTADORES A ARGENTINA-------------------*/
          // $('#provPymes').html('Argentina');
          // var pymesCountUp = new CountUp("totalPymes", totalPymes_var, totalPymes_ARG, 0, 0.5, options);
          // pymesCountUp.start();
          //
          // var pymes_porCountUp = new CountUp("porcPymes", porcPymes_var*100, porcPymes_ARG*100, 0, 0.5, options);
          // pymes_porCountUp.start();
          // $('#porcBar').css('width', porcPymes_ARG*100+'%');
          //
          // totalPymes_var = totalPymes_ARG;
          // porcPymes_var = porcPymes_ARG;

          /*AGREGAR CHANGEDOUNTS(ARGENTINA)*/

        })
        .on("click",clicked);

    });
barrasMobile();
}


//Position of the tooltip relative to the cursor
var tooltipOffset = {x: -790, y: -135};

//Create a tooltip, hidden at the start
function showTooltip(d,pos) {
  // moveTooltip(d,pos);
  // console.log(d.properties.provincia);
  // tooltip.style("display","block")
  //     .text(d.properties.provincia);
  //
  // tooltip.style("top",(pos.top+tooltipOffset.y)+"px")
  //    .style("left",(pos.left+tooltipOffset.x)+"px");

}

//Move the tooltip to track the mouse
function moveTooltip(d,pos) {
  // console.log("Inside showTooltip");
  // console.log(pos.top);
  // console.log(pos.left);
}

//Create a tooltip, hidden at the start
function hideTooltip() {
  tooltip.style("display","none");
}



// Add optional onClick events for features here
// d.properties contains the attributes (e.g. d.properties.name, d.properties.population)
function clicked(d,i) {

}

function contadoresArgentina() {
  $('#provPymes').html('Argentina');
  var pymesCountUp = new CountUp("totalPymes", totalPymes_var, totalPymes_ARG, 0, 0.5, options);
  pymesCountUp.start();

  var pymes_porCountUp = new CountUp("porcPymes", porcPymes_var*100, porcPymes_ARG*100, 0, 0.5, options);
  pymes_porCountUp.start();
  $('#porcBar').css('width', porcPymes_ARG*100+'%');

  totalPymes_var = totalPymes_ARG;
  porcPymes_var = porcPymes_ARG;

}

//Para hacer dos reemplazos en una string
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

//Para capitalizar todas las palabras de una string
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}