import React, { Fragment } from 'react'
import twitter from './twitter_logo.png'
import instagram from './instagram_logo.png'
import newsletter from './newsletter_logo.png'
import '../../index.scss'

const Home = () => (
  <Fragment>
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h1>Welcome!</h1>
        <br/>
        <p>The Music City Heaters are a group for both new and experienced soccer fans who want to be a part of the Nashville SC supporters’ culture, but aren’t necessarily ready to lead the drum section. It’s true, we’ve let our percussion skills slip since middle school band, and we don’t deny that the Davidson County Fire Marshal revoked our smoke bomb license (IN AN EGREGIOUS VIOLATION OF DUE PROCESS), but we treat every NSC match like a party and we’re right there in The Backline, letting the refs hear it. So, if you’re interested in joining an awesome fellowship of guys and gals that loves NSC, but doesn’t take itself too seriously, come introduce yourself and we’ll get to know each other over a tall, crisp, refreshing Black Cherry White Claw (SPONSOR US).</p>
        <footer>
          <h5>Connect</h5>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-2">
                <a href="https://twitter.com/HeatersNSC?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} />
                </a>
              </div>
              <div className="col-md-1">
                <a href="https://www.instagram.com/heatersnsc/?hl=en" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} />
                </a>
              </div>
              <div className="col-md-2">
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
