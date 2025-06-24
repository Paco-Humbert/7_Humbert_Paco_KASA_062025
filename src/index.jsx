import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // active React Router
import App from './App'
import './styles/index.scss' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Permet à toute l'application d'utiliser les routes */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)