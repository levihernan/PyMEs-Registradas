var caba, mendoza, santa_fe, buenos_aires, cordoba, corrientes, entre_rios, formosa, tucuman, santiago_del_estero;
var misiones, neuquen, salta, santa_cruz, chubut, san_juan, chaco, jujuy, rio_negro, tierra_del_fuego, la_rioja;
var san_luis, la_pampa, catamarca, arg;

// var jujuy = {
//   size: [
//     {label:"Pequeña", value:21.4},
//     {label:"MT1", value:60},
//     {label:"MT2", value:0.1},
//     {label:"Micro", value:72.5}
//   ],
//   sector: [
//     {label:"Comercio", value:27.2},
//     {label:"Mineria", value:0.2},
//     {label:"Agropecuario", value:14.5},
//     {label:"Industria", value:16.9},
//     {label:"Servicios", value:38.2},
//     {label:"Construcción", value:3}
//   ],
//   empleador: [
//     {label:"No empleadoras", value:37},
//     {label:"Empleadoras", value:63}
//   ],
//   info: {
//     name: "Jujuy",
//     pymes: 78000,
//     pymes_por: 0.5
//   }
// };
//
// var cordoba = {
//   size: [
//     {label:"Pequeña", value:41.4},
//     {label:"MT1", value:60},
//     {label:"MT2", value:0.1},
//     {label:"Micro", value:72.5}
//   ],
//   sector: [
//     {label:"Comercio", value:47.2},
//     {label:"Mineria", value:0.2},
//     {label:"Agropecuario", value:14.5},
//     {label:"Industria", value:16.9},
//     {label:"Servicios", value:38.2},
//     {label:"Construcción", value:3}
//   ],
//   empleador: [
//     {label:"No empleadoras", value:47},
//     {label:"Empleadoras", value:63}
//   ],
//   info: {
//     name: "Jujuy",
//     pymes: 178000,
//     pymes_por: 0.7
//   }
// };
//
// var buenos_aires = {
//   size: [
//     {label:"Pequeña", value:21.4},
//     {label:"MT1", value:40},
//     {label:"MT2", value:2},
//     {label:"Micro", value:72.5}
//   ],
//   sector: [
//     {label:"Comercio", value:47.2},
//     {label:"Mineria", value:0.2},
//     {label:"Agropecuario", value:4.5},
//     {label:"Industria", value:26.9},
//     {label:"Servicios", value:38.2},
//     {label:"Construcción", value:3}
//   ],
//   empleador: [
//     {label:"No empleadoras", value:37},
//     {label:"Empleadoras", value:40}
//   ],
//   info: {
//     name: "Buenos Aires",
//     pymes: 78000,
//     pymes_por: 0.5
//   }
// };
//
// var rio_negro = {
//   size: [
//     {label:"Pequeña", value:21.4},
//     {label:"MT1", value:30},
//     {label:"MT2", value:0.1},
//     {label:"Micro", value:72.5}
//   ],
//   sector: [
//     {label:"Comercio", value:7.2},
//     {label:"Mineria", value:0.2},
//     {label:"Agropecuario", value:14.5},
//     {label:"Industria", value:16.9},
//     {label:"Servicios", value:18.2},
//     {label:"Construcción", value:3}
//   ],
//   empleador: [
//     {label:"No empleadoras", value:90},
//     {label:"Empleadoras", value:63}
//   ],
//   info: {
//     name: "Río Negro",
//     pymes: 78000,
//     pymes_por: 0.5
//   }
// };
//
// var mendoza = {
//   size: [
//     {label:"Pequeña", value:21.4},
//     {label:"MT1", value:80},
//     {label:"MT2", value:0.1},
//     {label:"Micro", value:72.5}
//   ],
//   sector: [
//     {label:"Comercio", value:27.2},
//     {label:"Mineria", value:0.2},
//     {label:"Agropecuario", value:14.5},
//     {label:"Industria", value:16.9},
//     {label:"Servicios", value:48.2},
//     {label:"Construcción", value:3}
//   ],
//   empleador: [
//     {label:"No empleadoras", value:57},
//     {label:"Empleadoras", value:63}
//   ],
//   info: {
//     name: "Mendoza",
//     pymes: 78000,
//     pymes_por: 0.5
//   }
// };
//
// var chaco = {
//   size: [
//     {label:"Pequeña", value:21.4},
//     {label:"MT1", value:50},
//     {label:"MT2", value:2.1},
//     {label:"Micro", value:32.5}
//   ],
//   sector: [
//     {label:"Comercio", value:47.2},
//     {label:"Mineria", value:0.2},
//     {label:"Agropecuario", value:14.5},
//     {label:"Industria", value:56.9},
//     {label:"Servicios", value:38.2},
//     {label:"Construcción", value:3}
//   ],
//   empleador: [
//     {label:"No empleadoras", value:37},
//     {label:"Empleadoras", value:43}
//   ],
//   info: {
//     name: "Chaco",
//     pymes: 78000,
//     pymes_por: 0.5
//   }
// };
//
// var entre_rios = {
//   size: [
//     {label:"Pequeña", value:21.4},
//     {label:"MT1", value:50},
//     {label:"MT2", value:2.1},
//     {label:"Micro", value:32.5}
//   ],
//   sector: [
//     {label:"Comercio", value:47.2},
//     {label:"Mineria", value:0.2},
//     {label:"Agropecuario", value:14.5},
//     {label:"Industria", value:56.9},
//     {label:"Servicios", value:38.2},
//     {label:"Construcción", value:3}
//   ],
//   empleador: [
//     {label:"No empleadoras", value:37},
//     {label:"Empleadoras", value:43}
//   ],
//   info: {
//     name: "Chaco",
//     pymes: 22000,
//     pymes_por: 0.3
//   }
// };
//
// var arg = {
//   size: [
//     {label:"Pequeña", value:21.4},
//     {label:"MT1", value:50},
//     {label:"MT2", value:2.1},
//     {label:"Micro", value:100}
//   ],
//   sector: [
//     {label:"Comercio", value:47.2},
//     {label:"Mineria", value:0.2},
//     {label:"Agropecuario", value:14.5},
//     {label:"Industria", value:56.9},
//     {label:"Servicios", value:38.2},
//     {label:"Construcción", value:100}
//   ],
//   empleador: [
//     {label:"No empleadoras", value:37},
//     {label:"Empleadoras", value:100}
//   ],
//   info: {
//     pymes:300000,
//     pymes_por:0.4
//   }
// }

//var provincias_data = {arg:arg, entre_rios:entre_rios, cordoba: cordoba, jujuy: jujuy, buenos_aires: buenos_aires, rio_negro: rio_negro, mendoza: mendoza, chaco: chaco};
var provincias_data = {arg:arg};
// var provincias_data = {cordoba: cordoba, jujuy: jujuy};

// ----------------- EXTIENDO ARRAY PARA SUMAR PROPIEDADES ----------//
Array.prototype.sum = function (prop) {
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }
    return total
}

var provincias_general_data = {};

jQuery.ajax({
    url: "http://181.209.66.161/afip/api/por_provincia",
    type: "GET",
    dataType: "json",
    contentType: "application/text; charset=utf-8",
    success: function (response) {
        // console.log(response);

        for(var i = 0;i<response.length;i++){

          // console.log("i: ", i, " - ", resData[i]);
          provinceCode = response[i].Provincia.toLowerCase().replaceAll(" ",'_');
          // console.log(provinceCode);
          cantidadRes = response[i].Cantidad;
          universeRes = response[i].universe;
          percentRes = cantidadRes / universeRes;

          //Necesito la siguente linea pq las propiedades de provincia no existen
          provincias_general_data[provinceCode] = provincias_general_data[provinceCode] || {};

          provincias_general_data[provinceCode].cantidad = cantidadRes;
          provincias_general_data[provinceCode].universe = universeRes;
          provincias_general_data[provinceCode].percent = parseFloat(percentRes.toFixed(4));

        }
    },
    error: function (response) {
        console.log("failed API load");
    }
}).done(function(){
    console.log(provincias_general_data);
    load_map();
    // loadDonutData();
});


// -------------------------------------- CARGO SECTORES -------------------------------------- //
for(var i = 0;i<23;i++){
  $.ajax({
    dataType: "json",
    url: "http://181.209.66.161/afip/api/por_sector_custom/"+i,
    success: function(response) {

      res = response;
      var url = this.url;
      slashPos = url.lastIndexOf('/');
      urlNum = url.slice(slashPos+1);
      console.log(urlNum);
      // console.log(urlNum);
      var nombreProvincia = codeToProv(parseInt(urlNum));
      // console.log(nombreProvincia);
      console.log(nombreProvincia);
      if(urlNum == 1){
        console.log('Buenos Aires')
        console.log(res);
        console.log(response);
      };
      //Necesito la siguente linea pq las propiedades de provincia no existen
      provincias_data[nombreProvincia] = provincias_data[nombreProvincia] || {};
      provincias_data[nombreProvincia].sector = []
      for(var j = 0;j<res.length;j++){
          // console.log("res[j] is -------> ");
          // console.log(res[j]);
          if(res[j]['Sector'] !== 'Total'){
              provincias_data[nombreProvincia].sector.push({label:res[j]['Sector'], value:res[j]['Cantidad']})
          }

      }
      // console.log("Funciono????????");
      // console.log(nombreProvincia);
      // console.log(provincias_data[nombreProvincia]);

    },error: function(err){
      console.log(error);
    }
  });
};

// -------------------------------------- CARGO CATEGORIAS (size)-------------------------------------- //
for(var i = 0;i<23;i++){
  $.ajax({
    dataType: "json",
    url: "http://181.209.66.161/afip/api/por_categoria_custom/"+i,
    success: function(response) {

      res = response;
      // console.log(res);
      var url = this.url;
      slashPos = url.lastIndexOf('/');
      urlNum = url.slice(slashPos+1);
      // console.log(urlNum);
      var nombreProvincia = codeToProv(parseInt(urlNum));
      console.log(nombreProvincia);
      // console.log(nombreProvincia);
      if(urlNum == 1){
        console.log('Buenos Aires')
        console.log(res);
        console.log(response);
      };
      //Necesito la siguente linea pq las propiedades de provincia no existen
      provincias_data[nombreProvincia] = provincias_data[nombreProvincia] || {};
      provincias_data[nombreProvincia].size = []
      for(var j = 0;j<res.length;j++){
          // console.log("res[j] is -------> ");
          // console.log(res[j]);
          var cat = correctSizeName(res[j]['Categoria']);
          if(cat !== 'Total' && cat !== undefined){
            provincias_data[nombreProvincia].size.push({label:cat, value:res[j]['Cantidad']})
          }
      }

    },error: function(err){
      console.log(error);
    }
  });
}

var correctSizeName = function(code){
  switch(code) {
      case "micro":
        return "Micro";
      case "peq":
        return "Pequeña";
      case "tramo1":
        return "MT1";
      case "tramo2":
        return "MT2";
  }
}
var codeToProv = function(code){
  switch(code) {
      case 0:
          return "caba";
      case 1:
          return "buenos_aires";
      case 2:
          return "catamarca";
      case 3:
          return "cordoba";
      case 4:
          return "corrientes";
      case 5:
          return "entre_rios";
      case 6:
          return "jujuy";
      case 7:
          return "mendoza";
      case 8:
          return "la_rioja";
      case 9:
          return "salta";
      case 10:
          return "san_juan";
      case 11:
          return "san_luis";
      case 12:
          return "santa_fe";
      case 13:
          return "santiago_del_estero";
      case 14:
          return "tucuman";
      case 15:
          return "arg";
      case 16:
          return "chaco";
      case 17:
          return "chubut";
      case 18:
          return "formosa";
      case 19:
          return "misiones";
      case 20:
          return "neuquen";
      case 21:
          return "la_pampa";
      case 22:
          return "rio_negro";
      case 23:
          return "santa_cruz";
      case 24:
          return "tierra_del_fuego";
      default:
          return "undefined province";
  }
}
