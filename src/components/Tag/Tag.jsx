import React from 'react'
import { useParams } from 'react-router-dom'
import DataLogements from '../../datas/logements.json'
import './_Tag.scss'

function Tag() {
    // Récupération de l'ID de la location avec le hook useParams de React Router
    const { id } = useParams()
    const location = DataLogements.find((location) => location.id === id)

    return (

        <div className='tags'>
            <ul className='tags__container'>
                {location.tags.map((tag, index) => (
                    <li key={index} className='tags__container-item'>
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
        
    )
}

export default Tag