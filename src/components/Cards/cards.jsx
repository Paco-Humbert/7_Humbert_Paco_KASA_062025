import React from 'react'
import { Link } from 'react-router-dom'
import DataLogements from '../../datas/logements.json'
import './_Cards.scss'

// Création d'une fonction composant LogementsList récupérant les données de chaque location du JSON
function LogementsList() {
const isHome = location.pathname === '/';
    return (

        <section className='logements'>
            <div className='logements__list'>
                {DataLogements.map((location) => (
                    <div key={location.id} className='logements__list-item'>
                        <Link to={'/logements/' + location.id} className="logements__list-item-card">
                        <div className="image-wrapper">
                            <img src={location.cover} alt={location.title} className="logements-cover" />
                            {isHome && <div className="overlay"></div>}
                        </div>
                        <h2 className="logements-title">{location.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
        
    )
}

export default LogementsList