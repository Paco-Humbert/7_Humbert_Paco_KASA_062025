// Importation React pour pouvoir utiliser JSX
import React from 'react'

// Importation ReactDOM pour pouvoir injecter l'application dans le DOM
import ReactDOM from 'react-dom/client'

// Importe le composant principal de l'application
import App from './App.jsx'

// Importe les styles globaux
import './index.scss'

// Importe BrowserRouter pour gérer la navigation via React Router
import { BrowserRouter } from 'react-router-dom'

// Création de la racine de l'application et la rend dans l'élément HTML avec l'id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  // Active le mode strict de React pour détecter les erreurs potentielles
  <React.StrictMode>
    {/* Enveloppe App avec BrowserRouter pour permettre l'utilisation de la navigation */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
