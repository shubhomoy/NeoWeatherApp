import React from 'react';
import sunny from '../images/sun.svg';
import rainy from '../images/rainy.svg';
import cloudy from '../images/cloudy.svg';
import snow from '../images/snow.svg';
import sunnyRain from '../images/sunny-rainy.svg';
import thunder from '../images/thunder.svg';
import mist from '../images/mist.svg';


const weatherArray = [
    sunny,
    sunny,
    thunder,
    sunnyRain,
    sunny,
    rainy,
    snow,
    mist,
    cloudy
]

class WeatherIcon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weather: this.props.weather
        }
    }


    render() {
        if(this.state.weather.id == 800) {
            return(<img src={sunny} alt="Sunny"/>)
        }else{
            return(<img src={weatherArray[Math.floor(this.state.weather.id/100)]} alt="Weather Icon"/>)
        }
    }
}

export default WeatherIcon