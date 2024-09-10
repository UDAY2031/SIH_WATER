// Function to open the sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "220px";
    document.getElementById("main").style.marginLeft = "220px";
}

// Function to close the sidebar
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Bar Chart
const ctx1 = document.getElementById('damChartCanvas').getContext('2d');
const damChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Andhra Pradesh', 'Bihar', 'Gujarat', 'Karnataka', 'Maharashtra', 'Rajasthan', 'Tamil Nadu'],
        datasets: [{
            label: 'Number of Dams',
            data: [25, 12, 30, 21, 35, 25, 32],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
            
        }]
    },
    options: {
        
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Pie Chart
const ctx2 = document.getElementById('capacityPieChartCanvas').getContext('2d');
const capacityPieChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Andhra Pradesh', 'Bihar', 'Gujarat', 'Karnataka', 'Maharashtra', 'Rajasthan', 'Tamil Nadu'],
        datasets: [{
            label: 'Water Capacity (Million Liters)',
            data: [12340, 7654, 19876, 15098, 29765, 16543, 18654],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(201, 203, 207, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(201, 203, 207, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        }
    }
});

// Line Chart
const ctx3 = document.getElementById('lineChartCanvas').getContext('2d');
const lineChart = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['Andhra Pradesh', 'Bihar', 'Gujarat', 'Karnataka', 'Maharashtra', 'Rajasthan', 'Tamil Nadu'],
        datasets: [{
            label: 'Population (in Millions)',
            data: [54.4, 104.1, 63.9, 69.2, 113.9, 80.3, 78.4],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true
        }, {
            label: 'Current Water Capacity (Million Liters)',
            data: [12340, 7654, 19876, 15098, 29765, 16543, 18654],
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
function scrollToChart(chartId) {
    const chartElement = document.getElementById(chartId);
    if (chartElement) {
        chartElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
