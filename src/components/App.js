import React from 'react';
import InputBox from './InputBox';
import StarshipList from './StarshipList';
import swapi from '../api/swapi';
import './App.css';

//Specific ships so they can have image
//Star destroyer, death star, millennium falcon, y-wing, x-wing
const requiredShipsIndexes = [1, 3, 4, 5, 6];

export default class App extends React.Component{
    state = { starships: [], distance: null };   

    onDistanceSubmit = async (distance) => {
        const response = await swapi.get('/starships/');
        let requiredShips = [];
        for(var i=0; i < requiredShipsIndexes.length; i++) {
            requiredShips.push(response.data.results[requiredShipsIndexes[i]]);
        }
        this.setState({ starships: requiredShips, distance: distance });
    }

    render(){
        return (
            <div className="ui container">
                <InputBox onFormSubmit={this.onDistanceSubmit} />
                <StarshipList 
                    starships={this.state.starships} 
                    distance={this.state.distance} 
                />
            </div>
        );
    };
};
