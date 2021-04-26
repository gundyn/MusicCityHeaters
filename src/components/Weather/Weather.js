
import React, { useState, useEffect } from 'react'
import '../../index.scss'

function WeatherFetch () {
  const key = 'c1a0353f12095ca88e2d1e05adc0ac92'
  const [mainTemp, setMainTemp] = useState('')
  const [description, setDescription] = useState('')
  const [main, setMain] = useState('')
  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Nashville&APPID=' + key + '&units=metric')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMainTemp(data.main.temp)
        setDescription(data.wind.speed)
        setMain(data.weather[0].main)
      })
  }, [])

  return (
    <div className="weather">
      <h1 className="weatherHeader">Your Weather</h1>
      <h1>{mainTemp} °C</h1>
      <h1>{main}</h1>
      <h1>Wind : {description}</h1>
    </div>
  )
}

export default WeatherFetch
