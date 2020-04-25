import React from 'react';
import ReactApexCharts from 'react-apexcharts'

class WeatherChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
            series: [{
                name: "Temperature",
                data: [23, 25, 22, 24, 27, 24]
            }],
            options: {
                chart: {
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 3
                },
                markers: {
                    size: 5
                },
                yasxis: {
                    labels: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    }
                },
                xaxis: {
                    show: false,
                    categories: ['Now', '11:00', '12:00', '13:00', '14:00', '15:00'],
                },
                grid: {
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    }
                }
            },
        
        
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexCharts options={this.state.options} series={this.state.series} type="line"  />
            </div>
        );
    }
}

export default WeatherChart;