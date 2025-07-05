import React from 'react'
import { useParams } from 'react-router-dom'
import DataLogements from '../../datas/logements.json'

import StarActive from '../../assets/star-active.png'
import StarInactive from '../../assets/star-inactive.png'

import './_Rating.scss'

function Rating() {
    const { id } = useParams()
    const location = DataLogements.find((location) => location.id === id)
  
    const stars = []
    const rating = location.rating
    const maxRating = 5

    // Boucle comptant le nombre d'étoiles de la location que l'on ajoute au tableau "stars" avec push
    for (let i = 0 ; i < rating; i++) {
        stars.push(<img key={i} src={StarActive} alt="Etoile pleine" />)
    }

    // Boucle comptant les étoiles manquantes de la note de la location que l'on ajoute au tableau "stars" avec push
    for (let i = 0 ; i < maxRating - rating; i++) {
        stars.push(<img key={rating + i} src={StarInactive} alt="Etoile vide" />)
    }

    return (

        <div className='rating'>
            {stars}
        </div>
        
    )
}

export default Rating