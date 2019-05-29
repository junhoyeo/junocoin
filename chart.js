function updateChart(labels, data) {
  const ctx = document.getElementById('chart').getContext('2d');
  let gradientStroke = ctx.createLinearGradient(0, 0, 0, 1000);
  gradientStroke.addColorStop(0, '#fc6767');
  gradientStroke.addColorStop(1, '#ec008c');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'JUNOCOIN',
        borderColor: gradientStroke,
        pointBorderColor: gradientStroke,
        pointBackgroundColor: gradientStroke,
        pointHoverBackgroundColor: gradientStroke,
        pointHoverBorderColor: gradientStroke,
        backgroundColor: 'rgba(252, 103, 103, 0.5)',
        data: data
      }]
    }
  })
}
