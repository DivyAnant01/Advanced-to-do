import React, { useState } from 'react';
import axios from 'axios';
import { gsap } from 'gsap';

const WeatherDisplay = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'IN', name: 'India' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'FR', name: 'France' },
    { code: 'DE', name: 'Germany' },
    { code: 'JP', name: 'Japan' },
  ];

  const citiesByCountry = {
    US: ['New York', 'Los Angeles', 'Chicago'],
    IN: ['Delhi', 'Mumbai', 'Bangalore', 'Aligarh'],  // Aligarh added here{my city}
    GB: ['London', 'Manchester', 'Bristol'],
    FR: ['Paris', 'Marseille', 'Lyon'],
    DE: ['Berlin', 'Munich', 'Hamburg'],
    JP: ['Tokyo', 'Osaka', 'Kyoto'],
  };

  const handleFetchWeather = async () => {
    if (!city || !country) {
      setError('Please select both city and country.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=58b886c222e71be76cb3fadbc895572a&units=metric`
      );
      setWeather(response.data);
      gsap.fromTo('.weather-info', { opacity: 0 }, { opacity: 1, duration: 1 }); 
    } catch (error) {
      setError('Error fetching weather data. Please check your input.');
    }
    setLoading(false);
  };

  return (
    <div className="weather-container" style={styles.weatherContainer}>
      <h2>Weather Information</h2>
      <div className="input-container">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          style={styles.input}
        >
          <option value="">Select Country</option>
          {countries.map((countryOption) => (
            <option key={countryOption.code} value={countryOption.code}>
              {countryOption.name}
            </option>
          ))}
        </select>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={styles.input}
          disabled={!country} // Disable if no country is selected
        >
          <option value="">Select City</option>
          {country &&
            citiesByCountry[country]?.map((cityOption) => (
              <option key={cityOption} value={cityOption}>
                {cityOption}
              </option>
            ))}
        </select>
        <button onClick={handleFetchWeather} style={styles.button}>
          Get Weather
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : weather ? (
        <div className="weather-info">
          <h3>Weather in {weather.name}, {weather.sys.country}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      ) : null}
    </div>
  );
};

const styles = {
  weatherContainer: {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f0f8ff',
    textAlign: 'center',
    marginTop: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '300px',
    margin: 'auto',
  },
  input: {
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    width: '80%',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default WeatherDisplay;
