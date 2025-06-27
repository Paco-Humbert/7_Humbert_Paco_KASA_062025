// Importation React pour pouvoir utiliser JSX et les hooks
import React, { useState } from 'react';

// Importe le fichier de styles SCSS spécifique au composant Collapse
import './_Collapse.scss';

// Déclaration du composant Collapse, qui reçoit deux props : title (le titre du panneau) et content (le texte à afficher)
function Collapse({ title, content }) {
  // Hook d'état pour suivre si le panneau est ouvert ou fermé (false = fermé par défaut)
  const [isOpen, setIsOpen] = useState(false);

  // Fonction qui inverse l'état : si c'est ouvert, on ferme, et vice-versa
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Le rendu JSX du composant
  return (
    <div className="collapse">
      {/* En-tête cliquable avec le titre et une flèche */}
      <div className="collapse__header" onClick={toggleCollapse}>
        {/* Le titre du panneau (passé via les props) */}
        <h3 className="collapse__title">{title}</h3>

        {/* Une flèche qui pivote selon que le panneau est ouvert ou fermé */}
        <span className={`collapse__arrow ${isOpen ? 'open' : ''}`}>⌄</span>
      </div>

      {/* Le contenu n'est affiché que si le panneau est ouvert */}
      {isOpen && (
        <div className="collapse__content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

// On exporte le composant pour pouvoir l'utiliser dans d'autres fichiers (comme About.jsx)
export default Collapse;
