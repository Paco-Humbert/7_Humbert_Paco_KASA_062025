// Importation de React pour utiliser JSX
import React from 'react';

// Importation de NavLink pour gérer les liens avec React Router
import { NavLink } from 'react-router-dom';

// Importation de l'image d'erreur (404)
import Error404 from '../../assets/404.png';

// Importation du style spécifique à la page d'erreur
import './_Error.scss';

// Déclaration du composant Error
function Error() {
  return (
    <main className="errorpage">
      {/* Image d'erreur 404 */}
      <img src={Error404} alt="Erreur 404" />

      {/* Message d'erreur */}
      <p>Oups ! La page que vous demandez n'existe pas.</p>

      {/* Lien de retour vers la page d'accueil */}
      <NavLink to="/">
        Retourner sur la page d’accueil
      </NavLink>
    </main>
  );
}


export default Error;
