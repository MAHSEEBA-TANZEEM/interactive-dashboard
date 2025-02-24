document.addEventListener('DOMContentLoaded', function () {
  const chartSection = document.getElementById('chart');
  const infoSection = document.getElementById('info');

  // Example chart using Chart.js library
  chartSection.innerHTML = '<canvas id="myChart"></canvas>';
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      onClick: function (e, elements) {
        if (elements.length > 0) {
          const elementIndex = elements[0].index;
          const label = this.data.labels[elementIndex];
          const value = this.data.datasets[0].data[elementIndex];
          infoSection.innerHTML = `<h2>${label}</h2><p>Votes: ${value}</p>`;
        }
      }
    }
  });

  // Example info content
  infoSection.innerHTML = '<h2>Information</h2><p>This is an interactive dashboard example using HTML, CSS, and JavaScript.</p>';
});
