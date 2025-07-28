import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/my-portfolio">  {/* ✅ also matches repo name */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
