import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './views/App';

import 'normalize.css'

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
