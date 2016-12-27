  /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
  function dropFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
  };

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

function barrasMobile(){
  var percentHolderLength = $('.percentHolder').length;
  for (var n = 0; n < percentHolderLength; n++) {
    id = $('.percentHolder')[n].children[0].id;
    $('#'+id).css('width', provincias_general_data[id].percent*100 + '%');
    $('#'+id).after('<span class="percentData">' + parseFloat(provincias_general_data[id].percent*100).toFixed(1) + '%</span>');
  }
}
