import { Routes, Route } from 'react-router-dom'

// On importe les pages principales de l’application
import Home from './pages/Home/Home.jsx'            
import About from './pages/About/About.jsx'         
import Logement from './pages/Logements/Logements.jsx' 
import Error from './pages/Error/Error.jsx'         

// Importation des composants affichés sur toutes les pages
import Header from './components/Header/Header'     
import Footer from './components/Footer/Footer'    

function App() {
  return (
    <>
      {/* Le Header s’affiche sur toutes les pages */}
      <Header />

      {/* Définition des routes de l’application avec options "future" activées */}
      <Routes future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        
        {/* Page d’accueil accessible à la racine ("/") */}
        <Route path="/" element={<Home />} />

        {/* Page "À propos", accessible à "/about" */}
        <Route path="/about" element={<About />} />

        {/* Page de détail d’un logement, dynamique selon l’ID (ex : /logements/abc123) */}
        <Route path="/logements/:id" element={<Logement />} />

        {/* Route de secours : affiche la page Error si l’URL ne correspond à aucune route */}
        <Route path="*" element={<Error />} />
      </Routes>

      {/* Le Footer s’affiche sur toutes les pages */}
      <Footer />
    </>
  )
}

export default App