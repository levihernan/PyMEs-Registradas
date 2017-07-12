function drawHighcharts(id) {

  dataHTML = "<div class='row'><div class='col-md-2 text-right'><h4>";
  dataHTML += jsonData.provincias[id].nombre;
  dataHTML += "</h4><p class='text-muted'>PyMEs Total<br><strong>";
  dataHTML += jsonData.provincias[id].pymesTotal;
  dataHTML += "</strong></p><p class='text-muted'>Registradas<br><strong>";
  dataHTML += jsonData.provincias[id].pymesRegistradas;
  dataHTML += "</strong></p></div><div class='col-md-10'><div id='chart" + id + "' style='height: auto'></div></div></div>";

  $('#chartContainer').html(dataHTML);

  Highcharts.chart('chart' + id, {
    chart: {
      type: 'bar',
      height: 300
    },
    title: {
      text: ''
    },
    colors: ['#2196F3', '#4CAF50', '#f44336', '#FFC107', '#FFEB3B'],
    legend: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },

    xAxis: {
      tickInterval: 45,
      min: 0,
      max: 180,
      labels: {
        useHTML: true,
        formatter: function() {

          var icon = [];
          icon[0] = '<h1><i class="fa fa-industry" style="color: #2196F3"></i></h1>';
          icon[45] = '<h1><i class="fa fa-leaf" style="color: #4CAF50"></i></h1>';
          icon[90] = '<h1><i class="fa fa-ship" style="color: #f44336"></i></h1>';
          icon[135] = '<h1><i class="fa fa-signal" style="color: #FFC107"></i></h1>';
          icon[180] = '<h1><i class="fa fa-gears" style="color: #FFEB3B"></i></h1>';
          return icon[this.value];
        },
      }
    },

    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: 'Porcentaje de PyMEs registradas'
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      bar: {
        pointWidth: 10,
        dataLabels: {
          enabled: true
        }
      },
      series: {
        pointWidth: 25,
        dataLabels: {
          allowOverlap: true,
          enabled: true,
          useHTML: true,
          color: '#333',
          fontSize: '12px',
          formatter: function() {
            var icon = [];
            icon[0] = '<p class="chart-label">Industria y Minería: <strong>' + this.y + '</strong>%<small class="text-muted"> de ' + jsonData.provincias[id].industriaTotal + '</small></p>';
            icon[45] = '<p class="chart-label">Agropecuario: <strong>' + this.y + '</strong>%<small class="text-muted"> de ' + jsonData.provincias[id].agroTotal + '</small></p>';;
            icon[90] = '<p class="chart-label">Comercio: <strong>' + this.y + '</strong>%<small class="text-muted"> de ' + jsonData.provincias[id].comercioTotal + '</small></p>';;
            icon[135] = '<p class="chart-label">Servicio: <strong>' + this.y + '</strong>%<small class="text-muted"> de ' + jsonData.provincias[id].servicioTotal + '</small></p>';;
            icon[180] = '<p class="chart-label">Construcción: <strong>' + this.y + '</strong>%<small class="text-muted"> de ' + jsonData.provincias[id].construccionTotal + '</small></p>';;
            return icon[this.x];
          },
        },
        colorByPoint: true,
        pointStart: 0,
        pointInterval: 45,
      },

    },

    series: [{
      type: 'column',
      name: 'Provincia',
      data: [jsonData.provincias[id].industriaPorc, jsonData.provincias[id].agroPorc, jsonData.provincias[id].comercioPorc, jsonData.provincias[id].servicioPorc, jsonData.provincias[id].construccionPorc]
    }]
  });
};
