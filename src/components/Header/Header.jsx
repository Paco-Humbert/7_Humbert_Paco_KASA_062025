import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/LOGO.png';
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
          className="header__image"
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

export default Header;
