import { NavLink } from 'react-router-dom';
import Error404 from '../../assets/404.png';
import './_Error.scss';

// Déclaration du composant Error
function Error() {
  return (
    <main className="errorpage">
      <img src={Error404} alt="Erreur 404" />
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">
        Retourner sur la page d’accueil
      </NavLink>
    </main>
  );
}


export default Error;
