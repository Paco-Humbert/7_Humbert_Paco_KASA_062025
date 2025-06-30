// Importation des éléments dont on a besoin 
import React from 'react';

// Création des routes avec React Router
import ReactDOM from 'react-dom/client';

// Design
import './styles/_Global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Permet à toute l'application d'utiliser les routes */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)