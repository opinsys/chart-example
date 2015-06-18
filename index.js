var Chartist = require("chartist");

new Chartist.Bar('.ct-chart', {
  labels: ['Acer Aspire ES1-111, 11,6" perusmalli', 'Acer Travelmate B115-M, 11,6" nopeampi malli', 'HP Probook 430 G2 i3, 13,3" malli', 'HP Probook 430 G2 i5, 13,3" nopeampi malli'],
  series: [
    [5, 4, 3, 7],

  ]
}, {
  seriesBarDistance: 0,
  reverseData: true,
  horizontalBars: true,

  position: 'end',
  axisY: {
    offset: 300,
    showGrid: false,
    position: 'start'
  },
  axisX: {
    position: 'end',
    showGrid: false,
    showLabel: false,
  }
}).on('draw', function(data) {
  if(data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 30px'
    });
  }
});

