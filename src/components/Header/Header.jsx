import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/LOGO.png';
import './_Header.scss';

// Déclaration du composant Header
function Header() {
  return (
    // Élément principal du header avec la classe 'header'
    <header className="header">

      <img
        src={Logo}
        alt="Logo de Kasa"
        className="header__image"
      />
      
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
          A Propos
        </NavLink>
      </nav>

    </header>
  );
}

export default Header;
