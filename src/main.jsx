import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '../node_modules/.vite/deps/@chakra-ui_react.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router >
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Router>
)
