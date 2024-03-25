
import React, { useState } from 'react';
import './home.css';
import sunnyImage from '../images/sunny.png';
import windImage from '../images/wind.png';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState();

  const apiKey = 'dfe11ad227ea305fa7bf24158c77ee1e';

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <>
      <div className='body'>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <div className='weather Card shadow'>
              <div className='search'>
                <input
                  type='text'
                  placeholder='Enter city name'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={getWeather}>
                  <i className='fa-solid fa-magnifying-glass'></i>
                </button>
              </div>
              {weatherData && (
                <>
                  <div className='info text-center'>
                    <img
                      className='mt-4'
                      src={sunnyImage}
                      alt='no image'
                    />
                    <h1>{weatherData.name}</h1>
                    <h2>{weatherData.main.temp}</h2>
                  </div>
                  <div className='d-flex weatherdetail'>
                    <div className='details d-flex mt-3'>
                      <img
                        src='https://static-00.iconduck.com/assets.00/humidity-icon-512x419-5m7ztixz.png'
                        alt=''
                      />
                      <div className='flex-column'>
                        <h6 className='ms-4'>{weatherData.main.humidity}%</h6>
                        <h6 className='ms-4'>Humidity</h6>
                      </div>
                    </div>
                    <div className='windimage d-flex mt-3'>
                      <img src={windImage} alt='no image' />
                      <div className='flex-column'>
                        <h6>{weatherData.wind.speed} km/hr</h6>
                        <h6>Wind</h6>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
