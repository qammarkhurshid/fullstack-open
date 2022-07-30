import { useEffect, useState } from 'react';
import axios from 'axios';
const WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER;
export const CountryInfo = ({ country }) => {
  const [weatherData, setWeatherData] = useState({});
  const OPENWEATHER_BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;
  const [lat, lon] = country.latlng;
  let [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    axios
      .get(`${OPENWEATHER_BASE_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
      .then(({ data }) => {
        setWeatherData(data);
        const url = `http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`;
        setImageUrl(url);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  });
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <h3>Languages</h3>
      <ol>
        {Object.keys(country.languages).map((lang) => {
          return <li key={lang}>{country.languages[lang]}</li>;
        })}
      </ol>
      <img src={country.flags.png} alt="country_flag" />
      <h1>Weather in {country.name.common}</h1>
      <div>
        <p>
          Temprature:{' '}
          {Object.keys(weatherData).length
            ? `${parseFloat(weatherData?.main?.temp - 273.15)} Celcius`
            : `API not available`}
        </p>
        <img src={imageUrl} alt="weather_icon" />
        <p>Wind: {Object.keys(weatherData).length ? `${weatherData?.wind?.speed} km/s` : `API not available`}</p>
      </div>
    </div>
  );
};
