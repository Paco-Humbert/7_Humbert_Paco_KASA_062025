// Importation de React pour pouvoir écrire du JSX
import React from 'react';

// Importation du fichier de style spécifique au footer
import './_Footer.scss';

// Déclaration de la fonction composant Footer
function Footer() {
  return (
    // Balise <footer> qui encadre le bas de page
    <footer className="footer">
      {/* Texte affiché dans le footer */}
      <p>© 2024 Kasa. All rights reserved.</p>
    </footer>
  );
}

// Exportation par défaut du composant, pour pouvoir l'importer ailleurs (ex: dans App.jsx)
export default Footer;
