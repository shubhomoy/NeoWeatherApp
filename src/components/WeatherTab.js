import React from 'react';
import '../index.css';
import WeatherIcon from './WeatherIcon'

const WEEKDAY = [
    "Sun.",
    "Mon.",
    "Tue.",
    "Wed.",
    "Thu.",
    "Fri.",
    "Sat."
]

class WeatherTab extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            forecast: this.props.forcast
        }
    }

    componentDidMount() {
        var forecastDate = new Date(this.state.forecast.dt * 1000);
        var today = new Date()
        if(today.getDate() === forecastDate.getDate()) {
            this.setState({
                day: "Today"
            })
        }else{
            this.setState({
                day: WEEKDAY[forecastDate.getDay()]
            })
        }
    }

    render() {
    return (
        <div className={ this.state.day === "Today" ? "neu neu-selected tab" : "neu tab"}>
            <div className="day">{this.state.day}</div>
            <div className="temp">{Math.trunc(this.state.forecast.temp.day)}&#176;</div>
            <div>
                { this.state.forecast.weather.length > 0 ? <span className="stat">{this.state.forecast.weather[0].main}</span> : "" }
                { this.state.forecast.weather.length > 0 ? <WeatherIcon weather={this.state.forecast.weather[0]} /> : "" }
            </div>
        </div>
    );
    }
}

export default WeatherTab;