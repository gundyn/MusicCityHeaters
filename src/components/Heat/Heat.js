import React, { Fragment } from 'react'

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
    </div>
  </Fragment>
)

export default Heat
