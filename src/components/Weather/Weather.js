
import React, { useState, useEffect } from 'react'

function WeatherFetch () {
  const key = 'c1a0353f12095ca88e2d1e05adc0ac92'
  const [feelsLike, setFeelsLike] = useState('')
  const [mainTemp, setMainTemp] = useState('')
  const [description, setDescription] = useState('')
  const [main, setMain] = useState('')
  const [iconID, setIconID] = useState('')
  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Nashville&APPID=' + key + '&units=metric')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setFeelsLike(data.main.feelsLike)
        setMainTemp(data.main.temp)
        setDescription(data.weather[0].description)
        setMain(data.weather[0].main)
        setIconID(data.weather[0].icon)
      })
  }, [])
  return (
    <div>
      <h1>Main Temperature : {mainTemp} Degrees Celsius</h1>
      <h1>Feels like: {feelsLike} Degrees Celsius</h1>
      <h1>Weather Parameter: {main}</h1>
      <h1>Description : {description}</h1>
      <img src={'http://openweathermap.org/img/wn/' + iconID + '@2x.png'}/>
    </div>
  )
}
export default WeatherFetch
