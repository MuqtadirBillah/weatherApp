import React from "react";


function WeatherCard(props){
    return(
        <div className="weatherCardDiv">
            <div className="weatherCardtop">
                <h5 className="currentW">Current Weather<br />{props.cityName}</h5>
                <div className="iconDiv">
                    <img src={props.weatherIcon} className="weatherIcon" height="180px" width="180px" alt=""/>
                </div>
                <div className="iconRight">
                    <h1>{props.temp}<sup>o</sup>C</h1>
                    <h6>Real Feel ® {props.feels_like}</h6>
                </div>
            </div>
            <div className="weatherCardDown">
                <h4>{props.weatherCondition}</h4>
                <h6>Minimum Temperature {props.temp_min}<sup>o</sup>C</h6>
                <h6>Maximum Temperature {props.temp_max}<sup>o</sup>C</h6>
                <h6>Humidity {props.humidity}%</h6>
                <h6>Wind Speed {props.windSpeed} meter/sec</h6>
            </div>
        </div>
    );
}

export default WeatherCard;