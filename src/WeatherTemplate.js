import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import './WeatherTemplate.css'
import axios from "axios";
export default function WeatherTemplate (props)
{ 
  const [weatherData, setweatherData] = useState({ready: false});
 
  let city = "Centurion";


  function handleResponse(response) {
  console.log(response);
  setweatherData({
    ready: true,
    temperature: Math.round(response.data.main.temp),
    wind: response.data.wind.speed,
    name: response.data.name,
    icon: response.data.weather[0].icon,
    humidty: response.data.main.humidity,
    feels_like: Math.round(response.data.main.feels_like),
    description: response.data.weather[0].description,

  })
 
 
}

    if (weatherData.ready) {
      
    
    return (
       <div className = "WeatherTemplate container">
         <div className="form ">
         <form>
         <div className="row mb-5">
         <div className="col-9">
         <input type="email" className="form-control w-100"  aria-describedby="emailHelp" placeholder="Enter a city" AutoFocus="on"> 
         </input>
         </div>
  
         <div className="col-3">
          <button type="submit" class="btn btn-primary ">Submit</button>
         </div>
         </div>
         </form>
         </div>
         <div className="data">
        <div className="row">
        <div className="col-6">
        <img href={weatherData.icon}/>
        <span className="currentTemp">{weatherData.temperature}</span> <span className="units">ºc</span>
        </div>
        <div className="col-6">
        Humidity: {weatherData.humidty}%
        <br/>
        Wind: {weatherData.wind} km/h
        </div>
        </div>
        </div>
     <div className="current">
       <h1>
        {weatherData.name}
       </h1>
       <ul>
        <li>
        Feels like {weatherData.feels_like}°
        </li>
        <li>
       Thurday, 19:20
        </li>
        <li className="text-capitalize">
        {weatherData.description}
        </li>
       </ul>
     </div>

    <footer>
      <a href="https://github.com/Rivoningo2/weather-react-app" target="_blank"  rel="noreferrer"> open-soure code</a> by Rivoningo Hlungwane
    </footer>
        </div>
      )

}
else{
  const apiKey= "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return ("loading")
}
}