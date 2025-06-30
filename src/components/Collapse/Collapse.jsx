// Importation React pour pouvoir utiliser JSX et les hooks
import React, { useState } from 'react';

import './_Collapse.scss';

import arrowback from '../../assets/arrow_back.png'

// Création de la fonction composant Collapse en utilisant des props
function Collapse({ title, content }) {

    // Indication que la Collapse est fermée de base avec le state local
    const [isOpen, setIsOpen] = useState(false)

    return (
        
        <div className={`collapse ${isOpen ? "open" : ""}`}>
            <div className="collapse__header">
                <h2>{title}</h2>
                <button className="collapse__header-button" onClick={() => setIsOpen(!isOpen)}>
                <img src={arrowback} alt="Chevron" className={`chevron-up ${isOpen ? "open" : ""}`}/>
                </button>
            </div>
            <div className={`collapse__content ${isOpen ? "open" : ""}`}>
                {content}
            </div>
        </div>
        
    )
}



export default Collapse;
