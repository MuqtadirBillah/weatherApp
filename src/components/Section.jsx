import React, { useEffect, useState } from "react";
import axios from "axios";
import Clock from 'react-clock';
import WeatherCard from "./WeatherCard";


function Section(){

    
     const [clockTime, setValue] = useState(new Date());
 
    useEffect(() => {
        const interval = setInterval(
        () => setValue(new Date()),
        1000
        );
    
        return () => {
        clearInterval(interval);
        }
    }, []);

    var [weatherIconCode, setWeatherIconCode] = useState("01d");
    var weatherIcon = "http://openweathermap.org/img/wn/"+weatherIconCode+"@2x.png"
    var [weatherCondition, setWeatherCondition] = useState("Clear");
    var [weatherDescription, setWeatherDescription] = useState("Clear");
    var [cityName, setCityName] = useState("");
    var [weather, setWeather] = useState({});
    var [temp, setTemp] = useState("0");
    var [temp_min, setMinTemp] = useState("0");
    var [temp_max, setMaxTemp] = useState("0");
    var [feels_like, setFeelsLike] = useState("0");
    var [humidity, setHumidity] = useState("0");
    var [windSpeed, setWindSpeed] = useState("0");
  function getWeather(){
    axios.get(process.env.REACT_APP_api_key+cityName+"&appid=81fba28eab92d319c4367546b1c737fe&units=metric")
    .then(function (response) {
      const wData = response.data;
      setWeather(wData);
      setTemp(wData.main.temp);
      setMinTemp(wData.main.temp_min);
      setMaxTemp(wData.main.temp_max);
      setFeelsLike(wData.main.feels_like);
      setHumidity(wData.main.humidity);
      setWeatherIconCode(wData.weather[0].icon);
      setWeatherCondition(wData.weather[0].main);
      setWeatherDescription(wData.weather[0].description)
      setWindSpeed(wData.wind.speed);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    }); 
  }
  console.log("Current Temperature "+temp);
  console.log("Minimun Temperature "+temp_min);
  console.log("Maximum Temperature "+temp_max);
  console.log("Feels Like "+feels_like);
  console.log("Humidity "+humidity);

    return(
        <div className="section">
        <div className="searchCityDiv">
            <div className="form-inline searchForm d-flex justify-content-center">
                <input type="text" id="cityName" className="form-control cityNameIn" onChange={(e) => setCityName(e.target.value)} value={cityName} name="cityName" placeholder="Enter city name"/>
                <button type="submit" onClick={getWeather} className="searchBut btn btn-warning">Search ...</button>
                
            </div>
        </div>  
        
        <WeatherCard 
            temp = {temp} 
            temp_min={temp_min} 
            temp_max={temp_max} 
            feels_like={feels_like} 
            humidity={humidity} 
            weatherCondition={weatherCondition} 
            weatherDescription={weatherDescription} 
            windSpeed={windSpeed}
            weatherIcon={weatherIcon}
            cityName = {cityName}
        />

        {/* <h1>{cityName}<br /></h1>
        <img src={weatherIcon} alt=""/>
        <p>temp = {temp}<br />minTemp = {temp_min}<br />maxTemp = {temp_max}<br />Feels Like = {feels_like}<br />Humidity = {humidity}<br />Weather Condition = {weatherCondition}<br />Weather Description = {weatherDescription}<br />Wind Speed = {windSpeed}</p> */}
        </div>
    );
}

export default Section;