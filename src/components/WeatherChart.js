import React from 'react';
import ReactApexCharts from 'react-apexcharts'

class WeatherChart extends React.Component {
    constructor(props) {
        super(props);
        
        var temperatures = this.props.series.map(forecast => Math.trunc(forecast.temp)).slice(0, 6);
        var hours = this.props.series.map(forecast => new Date(forecast.dt * 1000)).slice(0, 6);

        hours = hours.map(d => (d.getHours() + ":" + d.getMinutes()))

        this.state = {
        
            series: [{
                name: "Temperature",
                data: temperatures
            }],
            options: {
                chart: {
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight',
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
                    },
                    axisBorder: {
                        show: false
                    },
                    title: {
                        text: ""
                    }
                },
                xaxis: {
                    type: 'category',
                    show: false,
                    categories: hours,
                    labels: {
                        show: true
                    }
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