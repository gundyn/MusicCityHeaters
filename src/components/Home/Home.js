import React, { Fragment } from 'react'
import Footer from '../Footer/Footer.js'
import '../../index.scss'

// import header from './header.jpeg'

const Home = () => (
  <Fragment>
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h1>Music City Heaters</h1>
        <br/>
        <p>The Music City Heaters are a group for both new and experienced soccer fans who want to be a part of the Nashville SC supporters’ culture, but aren’t necessarily ready to lead the drum section. It’s true, we’ve let our percussion skills slip since middle school band, and we don’t deny that the Davidson County Fire Marshal revoked our smoke bomb license (IN AN EGREGIOUS VIOLATION OF DUE PROCESS), but we treat every NSC match like a party and we’re right there in The Backline, letting the refs hear it. So, if you’re interested in joining an awesome fellowship of guys and gals that loves NSC, but doesn’t take itself too seriously, come introduce yourself and we’ll get to know each other over a tall, crisp, refreshing Black Cherry White Claw (SPONSOR US).</p>
      </div>
    </div>
    <img className="homeHeader" />
    <Footer />
  </Fragment>
)

export default Home
