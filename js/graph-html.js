var dataProvincia = [{"Sector":"Comercio","Cantidad":1086,"Porcentual":"29.98"},{"Sector":"Miner\u00eda","Cantidad":7,"Porcentual":"0.19"},{"Sector":"Agropecuario","Cantidad":650,"Porcentual":"17.94"},{"Sector":"Construccion","Cantidad":192,"Porcentual":"5.30"},{"Sector":"Servicios","Cantidad":1440,"Porcentual":"39.75"},{"Sector":"Industria","Cantidad":248,"Porcentual":"6.85"},{"Sector":"Total","Cantidad":3623}];

function barrasMobile() {

  var sortable = [];
  var pctext = "";

  tempText = "<a style=\"color:#006599 !important\" href=\"#donas\"><div class='bar' onclick=\"updateDataonBarGraphHover(this)\" id='" + "ID" + "'><div class='barWidth' style='width:" + "20" + "%;'>" + "NOMBRE" + "<div class='barNum'>" + "NUMERO" + "%</div></div></div></a>"
  pctext += tempText;

$('#barChart').html(pctext);
};

var percentHolderLength = $('.percentHolder').length;
for (var n = 0; n < percentHolderLength; n++) {
  id = $('.percentHolder')[n].children[0].id;
  $('#'+id).css('width', provincias_general_data[id].percent*100 + '%');
  // $('#'+id).after('<span class="percentData">' + parseFloat(provincias_general_data[id].percent*100).toFixed(1) + '%</span>');
};


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
};


barrasMobile();
