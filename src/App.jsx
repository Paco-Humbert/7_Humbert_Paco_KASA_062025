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
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logements/:id" element={<Logement />} />
      <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App