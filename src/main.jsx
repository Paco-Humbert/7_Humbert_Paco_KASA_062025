import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

// Importe BrowserRouter pour gérer la navigation via React Router
import { BrowserRouter } from 'react-router-dom'

// Création de la racine de l'application et la rend dans l'élément HTML avec l'id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  // Active le mode strict de React pour détecter les erreurs potentielles
  <React.StrictMode>
    {/* Enveloppe App avec BrowserRouter pour permettre l'utilisation de la navigation */}
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
