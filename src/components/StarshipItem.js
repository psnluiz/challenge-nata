import React from 'react';
import "./StarshipItem.css";

const StarshipItem = ({ starshipItem, distance, imageURL }) => {
    const GetNumberOfStops = () => {   
       let maxDistance = GetMaxDistanceBeforeRefuel();
       let numberOfStops = Math.round(distance / maxDistance);
       if (maxDistance >= distance){
           return "The ship can make it in one trip!"
       }else{
           return "It would take " + numberOfStops + " stops to make the travel";
       }
    };
    
    const renderSwitch = (period) => {
        switch(period){
            case 'years':
                return 8760;
            case 'months':
                 return 730;
            case 'week':
                 return 168;
        }
    };

    const GetMaxDistanceBeforeRefuel = () => {
        let [x, period] = starshipItem.consumables.split(" ");
        let periodToHours = renderSwitch(period);
        return (x * periodToHours) * starshipItem.MGLT;
    };



    return (
        <div className="item">
            <div className="ui medium image">
                <img src={imageURL} alt={starshipItem.name} />
            </div>
            <div className="content starship-info">
                <div className="header">
                    {starshipItem.name}
                </div>
                <div className="description">
                    {GetNumberOfStops()}
                </div>
            </div>
        </div>
    );
};

export default StarshipItem;