import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

// Importe BrowserRouter pour gérer la navigation via React Router
import { BrowserRouter } from 'react-router-dom'

// Monte mon application React dans le DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter
      // Ajout car sinon affichage WARNING dans la console
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
