import React from 'react';
import '../index.css';

import sun from '../images/sun.svg';

class WeatherTab extends React.Component {
    render() {
    return (
        <div className="neu tab">
            <div className="day">Today</div>
            <div className="temp">10&#176;</div>
            <div>
                <span className="stat">Clear</span>
                <img src={sun}></img>
            </div>
        </div>
    );
    }
}

export default WeatherTab;