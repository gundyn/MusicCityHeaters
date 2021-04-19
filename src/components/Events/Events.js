import React, { Fragment } from 'react'
import Iframe from 'react-iframe'
import Footer from '../Footer/Footer.js'
import '../../index.scss'

const Events = () => (
  <Fragment>
    <h1>Music City Heaters Calendar</h1>
    <Iframe url="https://calendar.google.com/calendar/embed?src=musiccityheaters%40gmail.com&ctz=America%2FChicago"/>
    <Footer />
  </Fragment>
)

export default Events
