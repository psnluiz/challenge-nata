import React from 'react';
import StarshipItem from './StarshipItem';
import starDestroyer from '../images/starDestroyer.png';
import deathStar from '../images/deathStar.png';
import millenniumFalcom from '../images/millenniumFalcom.png';
import xwing from '../images/xwing.png';
import ywing from '../images/ywing.png';
//Star destroyer, death star, millennium falcon, y-wing, x-wing

const starshipsImages = [starDestroyer, deathStar, millenniumFalcom, ywing, xwing];

const StarshipList = (props) => {

    const renderedList = props.starships.map((starship, index) => {
        return (
            <StarshipItem 
                starshipItem={starship} 
                key={index} 
                distance={props.distance}
                imageURL={starshipsImages[index]}
            />
        );
    });

    return (
        <div className="ui relaxed divided items">
            {renderedList}
        </div>
    );
};

export default StarshipList;