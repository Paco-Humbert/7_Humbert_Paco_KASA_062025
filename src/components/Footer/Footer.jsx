import React from 'react';

import WhiteLogo from '../../assets/white-logo.png';
import './_Footer.scss';

function Footer() {
  return (
    // Balise <footer> qui encadre le bas de page
    <footer className="footer">
      <img src={WhiteLogo} alt="Logo de Kasa" className="footer__image" />
      {/* Texte affiché dans le footer */}
      <p>© 2020 Kasa. All rights reserved.</p>
    </footer>
  );
}


export default Footer;
