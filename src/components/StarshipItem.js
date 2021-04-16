import React from 'react';
import "./StarshipItem.css";

const StarshipItem = ({ starshipItem, distance, imageURL }) => {
    const GetNumberOfStops = () => {   
       let maxDistance = GetMaxDistanceBeforeRefuel();
       let numberOfStops = Math.round(distance / maxDistance);
       if (maxDistance >= distance){
           return "The " + starshipItem.name + " can make it in one trip!"
       }else{
           let p = numberOfStops > 1 ? "stops" : "stop";
           return "It would take " + numberOfStops + " " + p + " to make the travel";
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
	    default :
		 return;
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
                    <div className="ui list">
                        <div class="item">
                            Model : {starshipItem.model}
                        </div>
                        <div class="item">
                            Passegens Capacity : {starshipItem.passengers}
                        </div>
                    </div>
                    <p>{GetNumberOfStops()}</p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default StarshipItem;
