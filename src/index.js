import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import 'normalize.css'
import './index.scss'
import App from './components/App/App'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    , document.getElementById('root'))

serviceWorker.unregister()
