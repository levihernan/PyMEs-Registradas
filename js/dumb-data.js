var jujuy = {
  size: [
    {label:"Pequeña", value:21.4},
    {label:"MT1", value:60},
    {label:"MT2", value:0.1},
    {label:"Micro", value:72.5}
  ],
  sector: [
    {label:"Comercio", value:27.2},
    {label:"Mineria", value:0.2},
    {label:"Agropecuario", value:14.5},
    {label:"Industria", value:16.9},
    {label:"Servicios", value:38.2},
    {label:"Construcción", value:3}
  ],
  empleador: [
    {label:"No empleadoras", value:37},
    {label:"Empleadoras", value:63}
  ],
  info: {
    name: "Jujuy",
    pymes: 78000,
    pymes_por: 0.5
  }
};

var cordoba = {
  size: [
    {label:"Pequeña", value:41.4},
    {label:"MT1", value:60},
    {label:"MT2", value:0.1},
    {label:"Micro", value:72.5}
  ],
  sector: [
    {label:"Comercio", value:47.2},
    {label:"Mineria", value:0.2},
    {label:"Agropecuario", value:14.5},
    {label:"Industria", value:16.9},
    {label:"Servicios", value:38.2},
    {label:"Construcción", value:3}
  ],
  empleador: [
    {label:"No empleadoras", value:47},
    {label:"Empleadoras", value:63}
  ],
  info: {
    name: "Jujuy",
    pymes: 178000,
    pymes_por: 0.7
  }
};

var buenos_aires = {
  size: [
    {label:"Pequeña", value:21.4},
    {label:"MT1", value:40},
    {label:"MT2", value:2},
    {label:"Micro", value:72.5}
  ],
  sector: [
    {label:"Comercio", value:47.2},
    {label:"Mineria", value:0.2},
    {label:"Agropecuario", value:4.5},
    {label:"Industria", value:26.9},
    {label:"Servicios", value:38.2},
    {label:"Construcción", value:3}
  ],
  empleador: [
    {label:"No empleadoras", value:37},
    {label:"Empleadoras", value:40}
  ],
  info: {
    name: "Buenos Aires",
    pymes: 78000,
    pymes_por: 0.5
  }
};

var rio_negro = {
  size: [
    {label:"Pequeña", value:21.4},
    {label:"MT1", value:30},
    {label:"MT2", value:0.1},
    {label:"Micro", value:72.5}
  ],
  sector: [
    {label:"Comercio", value:7.2},
    {label:"Mineria", value:0.2},
    {label:"Agropecuario", value:14.5},
    {label:"Industria", value:16.9},
    {label:"Servicios", value:18.2},
    {label:"Construcción", value:3}
  ],
  empleador: [
    {label:"No empleadoras", value:90},
    {label:"Empleadoras", value:63}
  ],
  info: {
    name: "Río Negro",
    pymes: 78000,
    pymes_por: 0.5
  }
};

var mendoza = {
  size: [
    {label:"Pequeña", value:21.4},
    {label:"MT1", value:80},
    {label:"MT2", value:0.1},
    {label:"Micro", value:72.5}
  ],
  sector: [
    {label:"Comercio", value:27.2},
    {label:"Mineria", value:0.2},
    {label:"Agropecuario", value:14.5},
    {label:"Industria", value:16.9},
    {label:"Servicios", value:48.2},
    {label:"Construcción", value:3}
  ],
  empleador: [
    {label:"No empleadoras", value:57},
    {label:"Empleadoras", value:63}
  ],
  info: {
    name: "Mendoza",
    pymes: 78000,
    pymes_por: 0.5
  }
};

var chaco = {
  size: [
    {label:"Pequeña", value:21.4},
    {label:"MT1", value:50},
    {label:"MT2", value:2.1},
    {label:"Micro", value:32.5}
  ],
  sector: [
    {label:"Comercio", value:47.2},
    {label:"Mineria", value:0.2},
    {label:"Agropecuario", value:14.5},
    {label:"Industria", value:56.9},
    {label:"Servicios", value:38.2},
    {label:"Construcción", value:3}
  ],
  empleador: [
    {label:"No empleadoras", value:37},
    {label:"Empleadoras", value:43}
  ],
  info: {
    name: "Chaco",
    pymes: 78000,
    pymes_por: 0.5
  }
};

var entre_rios = {
  size: [
    {label:"Pequeña", value:21.4},
    {label:"MT1", value:50},
    {label:"MT2", value:2.1},
    {label:"Micro", value:32.5}
  ],
  sector: [
    {label:"Comercio", value:47.2},
    {label:"Mineria", value:0.2},
    {label:"Agropecuario", value:14.5},
    {label:"Industria", value:56.9},
    {label:"Servicios", value:38.2},
    {label:"Construcción", value:3}
  ],
  empleador: [
    {label:"No empleadoras", value:37},
    {label:"Empleadoras", value:43}
  ],
  info: {
    name: "Chaco",
    pymes: 22000,
    pymes_por: 0.3
  }
};

var arg = {
  size: [
    {label:"Pequeña", value:21.4},
    {label:"MT1", value:50},
    {label:"MT2", value:2.1},
    {label:"Micro", value:100}
  ],
  sector: [
    {label:"Comercio", value:47.2},
    {label:"Mineria", value:0.2},
    {label:"Agropecuario", value:14.5},
    {label:"Industria", value:56.9},
    {label:"Servicios", value:38.2},
    {label:"Construcción", value:100}
  ],
  empleador: [
    {label:"No empleadoras", value:37},
    {label:"Empleadoras", value:100}
  ],
  info: {
    pymes:300000,
    pymes_por:0.4
  }
}

var provincias_data = {arg:arg, entre_rios:entre_rios, cordoba: cordoba, jujuy: jujuy, buenos_aires: buenos_aires, rio_negro: rio_negro, mendoza: mendoza, chaco: chaco};
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
        console.log(response);

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
});

