import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CustomNavbar from './components/Organism/CustomNavbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <CustomNavbar/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
