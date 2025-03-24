import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    if (!city) return;
    setError(""); // Clear previous errors

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setWeather(data);
      } else {
        setError("City not found. Please try again.");
        setWeather(null);
      }
    } catch (error) {
      setError("Failed to fetch data. Please check your connection.");
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Weather App 🌤️</h1>

      <div className="flex">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border border-gray-400 rounded-md focus:outline-none"
        />
        <button
          onClick={fetchWeather}
          className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Get Weather
        </button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {weather && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold">
            {weather.name}, {weather.sys.country}
          </h2>
          <p className="text-gray-600">{weather.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="Weather Icon"
            className="mx-auto"
          />
          <p className="text-2xl font-bold">{weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
