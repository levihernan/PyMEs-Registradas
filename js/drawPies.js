$(function () {
    Highcharts.chart('pie-chart-1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Total de PyMEs categorizadas'
        },
        tooltip: {
            pointFormat: '{series.name}: {point.percentage:.1f}%'
        },
        plotOptions: {
            pie: {
                size: 140,
                allowPointSelect: false,
                cursor: 'dafault',
                dataLabels: {
                    enabled: true,
                    format: '{point.name}<br>{point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'PyMEs categorizadas',
            colorByPoint: true,
            data: [{
                name: 'Pequeña',
                y: 21.4
            }, {
                name: 'MT1',
                y: 6
            }, {
                name: 'MT2',
                y: 0.1
            }, {
                name: 'Micro',
                y: 72.5
            }]
        }]
    });
});

$(function () {
    Highcharts.chart('pie-chart-2', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Total de PyMEs por sector'
        },
        tooltip: {
            pointFormat: '{series.name}: {point.percentage:.1f}%'
        },
        plotOptions: {
            pie: {
                size: 140,
                allowPointSelect: false,
                cursor: 'dafault',
                dataLabels: {
                    enabled: true,
                    format: '{point.name}<br>{point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'PyMEs por sector',
            colorByPoint: true,
            data: [{
                name: 'Comercio',
                y: 27.2
            }, {
                name: 'Agropecuario',
                y: 14.5
            }, {
                name: 'Industria',
                y: 16.9
            }, {
                name: 'Mineria',
                y: 0.2
            }, {
                name: 'Servicios',
                y: 38.2
            }, {
                name: 'Construcción',
                y: 3
            }]
        }]
    });
});


$(function () {
    Highcharts.chart('pie-chart-3', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Porcentaje de PyMEs empleadoras'
        },
        tooltip: {
            pointFormat: '{series.name}: {point.percentage:.1f}%'
        },
        plotOptions: {
            pie: {
                size: 140,
                allowPointSelect: false,
                cursor: 'dafault',
                dataLabels: {
                    enabled: true,
                    format: '{point.name}<br>{point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                        width: '150px',
                    }
                }
            }
        },
        series: [{
            name: 'PyMEs empleadoras',
            colorByPoint: true,
            data: [{
                name: 'No empleadoras',
                y: 37
            }, {
                name: 'Empleadoras',
                y: 63
            }]
        }]
    });
});
