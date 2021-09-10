import React from 'react'
import '../../index.scss'

import { FaInstagram, FaTwitter, FaMailchimp } from 'react-icons/fa'

function Footer () {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center" id="footer">
          <span className="anchor" id="connect"></span>
          <div className="col-lg-6 align-items-center">
            <div>
              <p className="footer">&copy; {(new Date().getFullYear())} | Music City Heaters</p>
            </div>
          </div>
          <div className="col-lg-6 social-icons align-items-center">
            <a className="insta-icon" href="https://www.instagram.com/heatersnsc/?hl=en" aria-label="Instagram profile for the Music City Heaters supporters group" target="_self"><FaInstagram/></a>
            <a className="twit-icon" href="https://twitter.com/HeatersNSC?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" aria-label="Twitter profile for the Music City Heaters supporters group" target="_self"><FaTwitter/></a>
            <a className="chimp-icon" href="https://mailchi.mp/1fb2fa80567d/musiccityheaters" aria-label="MailChimp newsletter sign-up" target="_self"><FaMailchimp/></a>
            <p className="self-promo">Site By: &nbsp;<a href="https://www.nathangundy.com/" aria-label="Nathan Gundy protfolio website" target="_self">Nathan Gundy</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
