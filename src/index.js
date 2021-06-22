import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import { StateProvider } from './store'
import ErrorBoundary from './containers/ErrorBoundary'

ReactDOM.render(
  <Router>
    <ErrorBoundary>
      <StateProvider>
        <App />
      </StateProvider>
    </ErrorBoundary>
  </Router>,
  document.getElementById('root'))
