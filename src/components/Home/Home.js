import React, { Fragment } from 'react'
import twitter from './twitter_logo.png'
import instagram from './instagram_logo.png'
import newsletter from './newsletter_logo.png'

const Home = () => (
  <Fragment>
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h1>Welcome!</h1>
        <br/>
        <p>Information about the heaters</p>
        <footer>
          <h2>Contect</h2>
          <br/>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-4">
                <a href="https://twitter.com/HeatersNSC?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} />
                </a>
              </div>
              <div className="col-md-4">
                <a href="https://www.instagram.com/heatersnsc/?hl=en" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} />
                </a>
              </div>
              <div className="col-md-4">
                <a href="https://mailchi.mp/1fb2fa80567d/musiccityheaters" target="_blank" rel="noopener noreferrer">
                  <img src={newsletter} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </Fragment>
)

export default Home
