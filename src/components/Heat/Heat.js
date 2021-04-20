import React, { Fragment } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import Footer from '../Footer/Footer.js'
import '../../index.scss'

import heat from './heat.png'

const Heat = () => (
  <Fragment>
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h1>H.E.A.T. initiative</h1>
        <br/>
        <div className="row justify-content-center text-center">
          <img src={heat} className="heat"/>
        </div>
        <br/>
        <p>Mission: to be a positive social influence and service the equity of the Nashville Community through the Music City Heaters</p>
        <hr />
        <div className="row justify-content-center text-center">
          <h3>Media</h3>
          <Container>
            <Row>
              <Col>
                <a href="https://pharmaceuticalsoccer.libsyn.com/cba-talk-is-over-for-now" target="_blank" rel="noopener noreferrer">
                  <u>Pharmaceutical Soccer</u>
                </a>
                <p>Tim Sullivan the leader in independent coverage of Nashville Soccer Club.</p>
              </Col>
              <Col>
                <a href="https://clubcountryusa.com/2021/02/08/h-e-a-t-initiative-set-to-support-minority-owned-businesses/" target="_blank" rel="noopener noreferrer">
                  <u>Club & Country</u>
                </a>
                <p>A Nashville Soccer podcast that is hosted by fans, for the fans</p>
              </Col>
            </Row>
          </Container>
        </div>
        <hr />
        <br />
      </div>
      <div>
        <Container>
          <Row className="restaurant">
            <Col>
              <Card className="heatCard">
                <Card.Body className="card-body">
                  <Card.Title className="title text-center">Local Distro</Card.Title>
                  <Card.Text className="heat-text">The Local Distro is your new, go-to spot for groceries, a quick bite after work, a drink with friends, a play date for your pup, and that perfect, local-made housewarming gift. Swing by our take-out window while walking your dog, make new friends over a friendly game of cornhole, and bring the family out for a weekend bar-b-que brunch! We can’t wait to bring our community together and do great things!</Card.Text>
                  <Card.Footer className="heatCardFooter">
                    <Card.Link href="https://www.thelocaldistro.com/" target="blank">Website</Card.Link>
                    <Card.Link href="https://g.page/The-Distro?share" target="blank">Map</Card.Link>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="heatCard">
                <Card.Body className="card-body">
                  <Card.Title className="title text-center">Riddim N Spice</Card.Title>
                  <Card.Text className="heat-text">Brothers Chef Kamal Kalokoh and Rashean Conaway want everyone to experience the food and culture of the islands. From juicy jerk chicken and cucumber-mango slaw (featured in the Nourish Nashville cookbook), to a variety of rice like Jamaican rice and peas and Haitian djon djon, our food transports you. Come in and taste for yourself.</Card.Text>
                  <Card.Footer className="heatCardFooter">
                    <Card.Link href="https://www.riddimnspice.com/" target="blank">Website</Card.Link>
                    <Card.Link href="https://www.google.com/maps/place/Riddim+n+Spice/@36.1678891,-86.8128521,17z/data=!3m1!4b1!4m5!3m4!1s0x8864673d6611131b:0xa952da8d33c58168!8m2!3d36.1678891!4d-86.8106581" target="blank">Map</Card.Link>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    <Footer />
  </Fragment>
)

export default Heat
