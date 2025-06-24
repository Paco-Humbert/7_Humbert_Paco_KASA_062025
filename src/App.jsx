// On importe Routes et Route depuis react-router-dom pour gérer la navigation
import { Routes, Route } from 'react-router-dom'

// On importe les pages principales de l'application
import Home from './pages/Home/Home.jsx'          // Page d’accueil
import About from './pages/About/About.jsx'       // Page "À propos"
import Logement from './pages/Logements/Logements.jsx' // Page de détail d’un logement
import Error from './pages/Error/Error.jsx'       // Page d’erreur 404

// On importe les composants affichés sur toutes les pages
import Header from './components/Header/Header'  // En-tête du site
import Footer from './components/Footer/Footer'  // Pied de page

// Définition du composant principal App
function App() {
  return (
    <>
      {/* Le Header s’affiche sur toutes les pages */}
      <Header />

      {/* Définition des routes de l’application */}
      <Routes>

        {/* Page d’accueil accessible à la racine ("/") */}
        <Route path="/" element={<Home />} />

        {/* Page "À propos", accessible à "/about" */}
        <Route path="/about" element={<About />} />

        {/* Page de détail d’un logement, dynamique selon l'ID (ex : /logements/abc123) */}
        <Route path="/logements/:id" element={<Logement />} />

        {/* Route de secours : affiche la page Error si l’URL ne correspond à aucune route */}
        <Route path="*" element={<Error />} />
      </Routes>

      {/* Le Footer s’affiche sur toutes les pages */}
      <Footer />
    </>
  )
}

// On exporte App pour l’utiliser dans index.jsx
export default App