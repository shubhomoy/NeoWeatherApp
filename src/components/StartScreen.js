import React from 'react';
import Preloader from '../images/Preloader_2.gif'
import '../index.css';

class StartScreen extends React.Component {
    render() {
        return(
            <div className="startContainer">
                <div className="inner">
                    <img src={Preloader} alt="Loading" />
                    <div>Fetching Weather data</div>
                    <div className="details">Make sure to give location access.</div>
                </div>
                
            </div>
        )
    }
}

export default StartScreen