function filterFunction() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      div = document.getElementById("myDropdown");
      a = div.getElementsByTagName("a");
      for (i = 0; i < a.length; i++) {
          if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
              a[i].style.display = "";
          } else {
              a[i].style.display = "none";
          }
      }
  };

function barrasMobile() {

  var sortable = [];
  var mobiletext = "<input type='text' placeholder='Buscar...' id='myInput' onkeyup='filterFunction()'>";
  var pctext = ""
  for (var n in provincias_general_data){sortable.push([n, provincias_general_data[n].percent, provincias_general_data[n].percent])};
  sortable.sort(function(a, b) {return b[1] - a[1]});

  for (var n = 0; n < sortable.length; n++) {
    var tempText = "<div class='percentHolder' id='" + sortable[n][0] + "'><a style='width:" + sortable[n][1]*100 + "%;'>" + sortable[n][0] + "<span class='percentData'>" + parseFloat(sortable[n][1]*100).toFixed(1) + "%</span></a></div>";
    mobiletext += tempText;
    tempText = "<div class='bar' id='" + sortable[n][0] + "'><div class='barWidth' style='width:" + sortable[n][1]*100 + "%;'>" + sortable[n][0] + "<div class='barNum'>" + parseFloat(sortable[n][1]*100).toFixed(1) + "%</div></div></div>"
    pctext += tempText;
  }
  $('#myDropdown').html(mobiletext);
  $('#barChart').html(pctext);
  var percentHolderLength = $('.percentHolder').length;
  for (var n = 0; n < percentHolderLength; n++) {
    id = $('.percentHolder')[n].children[0].id;
    $('#'+id).css('width', provincias_general_data[id].percent*100 + '%');
    // $('#'+id).after('<span class="percentData">' + parseFloat(provincias_general_data[id].percent*100).toFixed(1) + '%</span>');
  }

}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
};
