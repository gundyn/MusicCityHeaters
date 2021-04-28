import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import twitter from './twitter_logo.png'
import instagram from './instagram_logo.png'
import newsletter from './newsletter_logo.png'
import '../../index.scss'

const Footer = () => (
  <Fragment>
    <footer className="footer">
      <Container fluid className="footer_container">
        <Row className="justify-content-md-center">
          <Col md={{ span: 3, offset: 3 }}>
            <a className="footer_links" href="https://twitter.com/HeatersNSC?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
              <img src={twitter} />
            </a>
          </Col>
          <Col>
            <a className="footer_links" href="https://www.instagram.com/heatersnsc/?hl=en" target="_blank" rel="noopener noreferrer">
              <img src={instagram} />
            </a>
          </Col>
          <Col>
            <a className="footer_links" href="https://mailchi.mp/1fb2fa80567d/musiccityheaters" target="_blank" rel="noopener noreferrer">
              <img src={newsletter} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  </Fragment>
)

export default Footer
