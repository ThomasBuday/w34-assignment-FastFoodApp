import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Headers from './Headers.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Headers />
   <App />
  </StrictMode>,
)
