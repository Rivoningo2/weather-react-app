import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './WeatherTemplate.css'
export default function WeatherTemplate ()
{
    return (
       <div className = "WeatherTemplate container">
         <div className="form ">
         <form>
         <div className="row">
         <div className="col-9">
         <input type="email" className="form-control"  aria-describedby="emailHelp"> 
         </input>
         </div>
  
         <div className="col-3">
          <button type="submit" class="btn btn-primary">Submit</button>
         </div>
         </div>
         </form>
         </div>
         <div className="data">
        <div className="row">
        <div className="col-6">
        <img href="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png" alt="weather-icon"/>
        11º c
        </div>
        <div className="col-6">
        Humidity: 73%
        <br/>
        Wind: 1 km/h
        </div>
        </div>
        </div>
     <div className="current">
       <h1>
        Johannesburg
       </h1>
       <ul>
        <li>
        Feels like 10°
        </li>
        <li>
        Monday, 05:01
        </li>
        <li>
        clear sky
        </li>
       </ul>
     </div>
        </div>
      )
}