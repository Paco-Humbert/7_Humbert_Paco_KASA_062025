// src/App.jsx
import { Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Logement from './pages/Logements/Logements'
import Error from './pages/Error/Error'

// Composants globaux
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Page d’accueil */}
        <Route path="/" element={<Home />} />

        {/* Page à propos */}
        <Route path="/about" element={<About />} />

        {/* Page logement dynamique (par ID) */}
        <Route path="/logements/:id" element={<Logement />} />

        {/* Page 404 si aucune autre route ne correspond */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App