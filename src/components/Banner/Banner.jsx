import BannerImgHome from '../../assets/home.png'
import BannerImgAbout from '../../assets/about.png'

import './_Banner.scss'

// Déclaration du composant Banner, avec deux props : page et content (le texte)
function Banner({ page, content }) {
  /*
    On choisit dynamiquement l’image de fond en fonction de la page.
    Si la prop "page" vaut "home", on utilise l’image d’accueil,
    sinon on utilise l’image pour la page À propos.
  */
  const imageSrc = page === "home" ? BannerImgHome : BannerImgAbout

  return (
    <div className="banner">
      {/* Image de fond affichée dans la bannière */}
      <img
        src={imageSrc}
        alt="Paysage"
        className="banner__image"
      />

      {/* Conteneur pour le texte affiché par-dessus l’image */}
      <div className="banner__content">
        <p>{content}</p>
      </div>
    </div>
  )
}


export default Banner
