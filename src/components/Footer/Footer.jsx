import React from 'react';

import WhiteLogo from '../../assets/white-logo.png';
import './_Footer.scss';

function Footer() {
  return (
    
    <footer className="footer">
      <img src={WhiteLogo} alt="Logo de Kasa" className="footer__image" />
      <p className="footer__info">© 2020 Kasa. All rights reserved.</p>
    </footer>
  );
}


export default Footer;
