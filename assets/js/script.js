var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['12:53:06', '11:53:06', '10:53:06', '09:53:06', '08:53:06', '07:53:06', '06:53:06'],
    datasets: [{
      label: 'Temperature (C)',
      data: [27, 29, 27, 28, 28, 28, 27],
      backgroundColor: "rgba(153,255,51,0.4)"
    }, {
      label: 'Humidity (%)',
      data: [27, 28, 28, 29, 29, 28, 29],
      backgroundColor: "rgba(255,153,0,0.4)"
    }]
  }
});

