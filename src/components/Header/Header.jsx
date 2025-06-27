// Importation de React pour pouvoir écrire du JSX
import React from 'react';

// Importation de NavLink pour gérer la navigation avec React Router
import { NavLink } from 'react-router-dom';

// Importation du logo de Kasa
import Logo from '../../assets/LOGO.png';

// Importation du style spécifique au header
import './_Header.scss';

// Déclaration du composant Header
function Header() {
  return (
    // Élément principal du header avec la classe 'header'
    <header className="header">

      {/* Logo cliquable qui redirige vers la page d'accueil */}
      <NavLink to="/">
        <img
          src={Logo}
          alt="Logo de Kasa"
          className="header__image" // SCSS : gère la taille et l’adaptation responsive
        />
      </NavLink>

      {/* Barre de navigation avec les liens */}
      <nav className="header__navbar">
        {/* Lien vers la page d'accueil */}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Accueil
        </NavLink>

        {/* Lien vers la page À propos */}
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          A propos
        </NavLink>
      </nav>

    </header>
  );
}

// Exportation du composant pour pouvoir l'utiliser ailleurs (ex: App.jsx)
export default Header;
