import React, { Component } from 'react';
import './characterList.styles.css';

import Character from "./Character"

const CharacterList = (props) => {
    if(!props.characters){
        return <h1>Loading...</h1>
    }
    return (
        <div className="card-list">
            {props.characters.map(character => {
                return <Character character={character}></Character>
            })}

        


        </div>
    );
};

export default CharacterList