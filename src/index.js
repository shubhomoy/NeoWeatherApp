import React from 'react';
import ReactDOM from 'react-dom';
import WeatherTab from './components/WeatherTab'
import WeatherChart from './components/WeatherChart'
import WeatherIcon from './components/WeatherIcon'
import StartScreen from './components/StartScreen'
import './index.css';

const appid = "c3e7f513320bbb800b120a1b8adacc8f"

class WeatherApp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            lat: 0,
            lon: 0,
            currWeather: undefined,
            hourly: undefined,
            daily: undefined
        }
    }

    getWeather(lat, lon) {
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + appid + "&units=metric")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    currWeather: result.current,
                    hourly: result.hourly,
                    daily: result.daily,
                })
            },
            (error) => {
                console.log(error)
            }
        )
    }

    componentDidMount() {
        let currentComponent = this
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                currentComponent.setState({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                })

                currentComponent.getWeather(position.coords.latitude, position.coords.longitude)
            });
        } else {
            console.log("Not Available");
        }
    }

    render() {
        if(this.state.currWeather && this.state.hourly && this.state.daily) {
            return (
                <div className="container">
                    <div className="mainTempContainer">
                        <div className="mainTempLeft">
                            <div className="mainTemp">
                                {Math.trunc(this.state.currWeather.temp)}&#176;
                            </div>
                            <div className="mainTempText">
                                {this.state.currWeather.weather.length > 0 ? this.state.currWeather.weather[0].description.charAt(0).toUpperCase() + this.state.currWeather.weather[0].description.slice(1) : ""}
                            </div>
                        </div>
                        <div className="mainTempRight">
                            {this.state.currWeather.weather.length > 0 ? <WeatherIcon weather={this.state.currWeather.weather[0]}/> : "" }
                        </div>
                    </div>
                    
                    <div style={{paddingLeft: "20px"}}>
                        <div className="weatherTabsContainer">
                            {this.state.daily.map((forecast, idx) => <WeatherTab forcast={forecast} key={idx} />)}
                            
                            <div style={{padding: "10px"}}></div>
                        </div>
                    </div>
                    
        
                    <div className="detailsContainer">
                        <div className="neu">
                            <WeatherChart series={this.state.hourly} />
                        </div>
                    </div>
                </div>
            );
        }else{
            return (
                <StartScreen />
            )
        }
    }
}




ReactDOM.render(
    <WeatherApp />,
    document.getElementById('root')
);
