$(document).ready(function() {
  Highcharts.chart('container', {
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
      enabled:false,
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
        pointPadding: 0.1,
        groupPadding: 0,
        dataLabels: {
          allowOverlap: true,
                enabled: true,
                useHTML: true,
                color: '#333',
                fontSize: '12px',
                formatter: function() {
                  var icon = [];
                  icon[0] = '<p class="p-t-1">Industria y Minería: '+ this.y +'%<small class="text-muted"> de #####</small></p>';
                  icon[45] = '<p class="p-t-1">Agropecuario: '+ this.y +'%<small class="text-muted"> de #####</small></p>';;
                  icon[90] = '<p class="p-t-1">Comercio: '+ this.y +'%<small class="text-muted"> de #####</small></p>';;
                  icon[135] = '<p class="p-t-1">Servicio: '+ this.y +'%<small class="text-muted"> de #####</small></p>';;
                  icon[180] = '<p class="p-t-1">Construcción: '+ this.y +'%<small class="text-muted"> de #####</small></p>';;
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
      name: '4/20/2017',
      data: [10, 20, 33, 40, 50]
    }]
  });
});
