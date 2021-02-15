import React, { Fragment } from 'react'
import Iframe from 'react-iframe'

const Events = () => (
  <Fragment>
    <h1>Music City Heaters Calendar</h1>
    <Iframe url="https://calendar.google.com/calendar/embed?src=musiccityheaters%40gmail.com&ctz=America%2FChicago"
      width="100%"
      height="500px"
      display="initial"
      position="relative"
    />
  </Fragment>
)

export default Events
