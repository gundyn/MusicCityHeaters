import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Iframe from 'react-iframe'
import WeatherFetch from '../Weather/Weather'
import Footer from '../Footer/Footer'
import '../../index.scss'

const Events = () => (
  <Fragment>
    <h1>Music City Heaters Calendar</h1>
    <Container className="eventContainer">
      <Row>
        <Col xs={6} md={4} className="weatherCol">
          <WeatherFetch />
        </Col>
        <Col xs={6} md={8}>
          <Iframe url="https://calendar.google.com/calendar/embed?src=musiccityheaters%40gmail.com&ctz=America%2FChicago"/>
        </Col>
      </Row>
    </Container>
    <Footer />
  </Fragment>
)

export default Events
