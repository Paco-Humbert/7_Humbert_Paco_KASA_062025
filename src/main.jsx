import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

// Importe BrowserRouter pour gérer la navigation via React Router
import { BrowserRouter } from 'react-router-dom'

// Création de la racine de l'application et la rend dans l'élément HTML avec l'id 'root'  ????
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
