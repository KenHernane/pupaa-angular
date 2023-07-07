                                             // Fixed data for demonstration
                                            const dayData = [50, 70, 80, 60, 90, 120, 100];
                                            const weekData = [400, 550, 600, 520];
                                            const yearData = [5000, 6000, 6500, 7000, 7500, 8000, 9000, 8500, 9500, 10000, 11000, 12000];
                                            function displayVisitorData(data) {
                                            document.getElementById('visitorData').textContent = yearData.reduce((a, b) => a + b, 0);;
                                          }
                                            // Get the chart canvas and context
                                            const canvas = document.getElementById('chart');
                                            const ctx = canvas.getContext('2d');

                                            // Create the initial day chart
                                            let chart = createDayChart(dayData);

                                            // Listen for the change event on the dropdown
                                            chartView.addEventListener('change', function() {
                                              const view = this.value;

                                              // Remove the old chart
                                              if (chart) {
                                                chart.destroy();
                                              }

                                              // Create the appropriate chart based on the selected view
                                              if (view === 'day') {
                                                chart = createDayChart(dayData);
                                                displayVisitorData(dayData);
                                              } else if (view === 'week') {
                                                chart = createWeekChart(weekData);
                                                displayVisitorData(weekData);
                                              } else if (view === 'year') {
                                                chart = createYearChart(yearData);
                                                displayVisitorData(yearData);
                                              }
                                            });

                                            // Function to create the day chart
                                            function createDayChart(data) {
                                              return new Chart(ctx, {
                                                type: 'line',
                                                data: {
                                                  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                                  datasets: [{
                                                    label: 'Visitors per Day',
                                                    data: data,
                                                    backgroundColor: 'rgba(0, 123, 255, 0.3)',
                                                    borderColor: 'rgba(0, 123, 255, 1)',
                                                    borderWidth: 2
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
                                            }

                                            // Function to create the week chart
                                            function createWeekChart(data) {
                                              return new Chart(ctx, {
                                                type: 'line',
                                                data: {
                                                  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                                                  datasets: [{
                                                    label: 'Visitors per Week',
                                                    data: data,
                                                    backgroundColor: 'rgba(255, 193, 7, 0.3)',
                                                    borderColor: 'rgba(255, 193, 7, 1)',
                                                    borderWidth: 2
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
                                            }

                                            // Function to create the year chart
                                            function createYearChart(data) {
                                              return new Chart(ctx, {
                                                type: 'line',
                                                data: {
                                                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                                                  datasets: [{
                                                    label: 'Visitors per Month',
                                                    data: data,
                                                    backgroundColor: 'rgba(40, 167, 69, 0.3)',
                                                    borderColor: 'rgba(40, 167, 69, 1)',
                                                    borderWidth: 2
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
                                            }

                                              // Function to display the visitor data
                                              // function displayVisitorData(data) {
                                              //   let visitorData = '';

                                              //   data.forEach(function(value, index) {
                                              //     if (index === data.length - 1) {
                                              //       visitorData += value;
                                              //     } else {
                                              //       visitorData += value + ', ';
                                              //     }
                                              //   });

                                              //   document.getElementById('visitorData').textContent = 'Visitors: ' + visitorData;

                                              // }

