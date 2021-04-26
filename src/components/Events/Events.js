import React, { Fragment } from 'react'
import Iframe from 'react-iframe'
import WeatherFetch from '../Weather/Weather'
import Footer from '../Footer/Footer'
import '../../index.scss'

const Events = () => (
  <Fragment>
    <h1>Music City Heaters Calendar</h1>
    <Iframe url="https://calendar.google.com/calendar/embed?src=musiccityheaters%40gmail.com&ctz=America%2FChicago"/>
    <br />
    <WeatherFetch />
    <Footer />
  </Fragment>
)

export default Events
