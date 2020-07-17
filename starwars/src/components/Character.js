// Write your Character component here
import React from 'react'
import './character.styles.css'


const Character = ({ character }) => {
    console.log(character.image)
    return (
        <div className="card-container">
            <img src={character.image}></img>
            <div className="card-content">
                <h1>{character.name}</h1>
                <h3>{}</h3>
                <p></p>
            </div>
        </div>
    )
}

export default Character