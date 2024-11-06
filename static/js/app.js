// Chart.js initialization
const ctx = document.getElementById('chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // Choose the type of chart
    data: {
        labels: ['Label1', 'Label2'], // Example labels
        datasets: [{
            label: 'Data Points',
            data: [12, 19],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Refresh chart data function
function refreshChart(newData) {
    myChart.data.datasets[0].data = newData; // Set new data array
    myChart.update();
}

// Example: update data after calculation
function performCalculation() {
    // Perform your calculation here and get new data
    const newData = [/* New calculated values here */];
    refreshChart(newData);
}
