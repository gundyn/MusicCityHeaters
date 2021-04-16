import React, { Fragment } from 'react'
import twitter from './twitter_logo.png'
import instagram from './instagram_logo.png'
import newsletter from './newsletter_logo.png'
import '../../index.scss'

const Footer = () => (
  <Fragment>
    <footer className="footer">
      <h5>Connect</h5>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-2">
            <a className="footer_links"href="https://twitter.com/HeatersNSC?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
              <img src={twitter} />
            </a>
          </div>
          <div className="col-md-1">
            <a className="footer_links"href="https://www.instagram.com/heatersnsc/?hl=en" target="_blank" rel="noopener noreferrer">
              <img src={instagram} />
            </a>
          </div>
          <div className="col-md-2">
            <a className="footer_links"href="https://mailchi.mp/1fb2fa80567d/musiccityheaters" target="_blank" rel="noopener noreferrer">
              <img src={newsletter} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </Fragment>
)

export default Footer
