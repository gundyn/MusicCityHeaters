import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './App'
import { HashRouter } from 'react-router-dom'

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-NJMGVQZ'
}

TagManager.initialize(tagManagerArgs)

const appJsx = (
  <HashRouter>
    <App />
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
