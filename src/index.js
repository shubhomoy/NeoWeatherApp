import React from 'react';
import ReactDOM from 'react-dom';
import WeatherTab from './components/WeatherTab'
import WeatherChart from './components/WeatherChart'
import './index.css';

import sun from './images/sun.svg';
  


class WeatherApp extends React.Component {
    render() {
    return (
        <div className="container">

            <div className="mainTempContainer">
                <div className="mainTempLeft">
                    <div className="mainTemp">
                        10&#176;
                    </div>
                    <div className="mainTempText">
                        Clear
                    </div>
                </div>
                <div className="mainTempRight">
                    <img src={sun} />
                </div>
            </div>
            
            <div style={{paddingLeft: "20px"}}>
                <div className="weatherTabsContainer">
                    <WeatherTab />
                    <WeatherTab />
                    <WeatherTab />
                    <WeatherTab />
                    <WeatherTab />
                    <WeatherTab />
                    <WeatherTab />
                    <WeatherTab />
                    <div style={{padding: "10px"}}></div>
                </div>
            </div>
            

            <div className="detailsContainer">
                <div className="neu">
                    <WeatherChart />
                </div>
            </div>
        </div>
    );
    }
}




ReactDOM.render(
    <WeatherApp />,
    document.getElementById('root')
);
