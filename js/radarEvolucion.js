$(document).ready(function() {
  Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },

    title: {
      text: ''
    },
    colors: ['#2196F3', '#4CAF50', '#f44336', '#FFC107', '#FFEB3B'],
    legend: {
      enabled: false
    },
    tooltip: {
      enabled:false,
      // borderColor: 'rgba(0,0,0,0)',
      // backgroundColor: 'rgba(0,0,0,0)',
      // shadow: false,
      // useHTML: true,
      // formatter: function() {
      //   var icon = [];
      //
      //   icon[0] = '<i class="fa fa-industry"></i>';
      //   icon[45] = '<i class="fa fa-leaf"></i>';
      //   icon[90] = '<i class="fa fa-ship"></i>';
      //   icon[135] = '<i class="fa fa-signal"></i>';
      //   icon[180] = '<i class="fa fa-gears"></i>';
      //
      //   var text = [];
      //
      //   text[0] = ' Industria y Minería';
      //   text[45] = ' Agropecuario';
      //   text[90] = ' Comercio';
      //   text[135] = ' Servicio';
      //   text[180] = ' Construcción';
      //
      //   var title = '<div class="bg-white tooltip-borde"><div class="tooltip-header bg-primary"><p class=" p-l-1 p-r-1">' + icon[this.x] + text[this.x] + '</p></div>';
      //   var body = '<div class="bg-white text-left">';
      //   var footer = '</p></div></div>'
      //
      //
      //   $.each(this.points, function(i, point) {
      //
      //     var clase;
      //
      //     if (this.y <= 33) {
      //       clase = 'label-danger';
      //     } else if (this.y <= 66) {
      //       clase = 'label-warning';
      //     } else {
      //       clase = 'label-success';
      //     }
      //
      //     body += '<p class=" p-l-1 p-r-1 p-t-1 text-center"><small><span style="color:' + this.point.color + '">\u25CF</span> ' + this.series.name + '</small> &nbsp;<span class="label ' + clase + '">' + this.y + '</span></p>';
      //   });
      //
      //   var msj = title + body + footer;
      //   return msj;
      // },
      // shared: true
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
        pointWidth: 20,
        dataLabels: {
          enabled: true
        }
      },
      series: {
        dataLabels: {
                enabled: true,
                useHTML: true,
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
