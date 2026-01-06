/* 
   NovaAI - Main JS Logic
*/

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Sidebar Toggle
    const toggleBtn = document.getElementById('sidebar-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Chart Initialization
    if (document.getElementById('usageChart')) {
        initUsageChart();
    }
});

function initUsageChart() {
    const ctx = document.getElementById('usageChart').getContext('2d');

    // Gradient for Bars
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#3b82f6');
    gradient.addColorStop(1, '#8b5cf6');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Tokens Used',
                data: [450, 590, 320, 780, 540, 420, 600],
                backgroundColor: gradient,
                borderRadius: 8,
                barThickness: 40,
                hoverBackgroundColor: '#2563eb'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // Custom legend used in HTML
                },
                tooltip: {
                    backgroundColor: '#1f2937',
                    titleColor: '#fff',
                    bodyColor: '#9ca3af',
                    padding: 12,
                    cornerRadius: 8,
                    displayColors: false
                }
            },
            scales: {
                y: {
                    display: false,
                    grid: {
                        display: false
                    },
                    beginAtZero: true
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#6b7280',
                        font: {
                            family: "'Plus Jakarta Sans', sans-serif",
                            size: 12
                        }
                    }
                }
            },
            layout: {
                padding: {
                    top: 20,
                    bottom: 0
                }
            }
        }
    });
}
