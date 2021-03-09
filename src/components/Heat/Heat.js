import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

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
        <br/>
        <div className="row justify-content-center text-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOkCKEcEtM278_ZFe9qCZGAfQER2VxLe3fiSC2MCtpvrmolg/viewform?usp=pp_url" target="_blank" rel="noopener noreferrer">
            HEAT Restaurant Visit Form
          </a>
        </div>
      </div>
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title className="text-dark text-center">Local Distro</Card.Title>
          <Card.Text>The Local Distro is your new, go-to spot for groceries, a quick bite after work, a drink with friends, a play date for your pup, and that perfect, local-made housewarming gift. Swing by our take-out window while walking your dog, make new friends over a friendly game of cornhole, and bring the family out for a weekend bar-b-que brunch! We can’t wait to bring our community together and do great things!</Card.Text>
          <Card.Link href="https://www.thelocaldistro.com/">Website</Card.Link>
          <Card.Link href="https://g.page/The-Distro?share">Map</Card.Link>
        </Card.Body>
      </Card>
    </div>
  </Fragment>
)

export default Heat
