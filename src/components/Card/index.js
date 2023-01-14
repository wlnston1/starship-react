import React, {useState} from "react";


export const Card = (props) => {

    const [isClicked, setClicked] = useState(false);

    const handleClick = () => {
        if (isClicked === true)
        {
            setClicked(false);
        }
        else
            setClicked(true);
    }

    return (
        <div className="card" onClick={handleClick}>
            {isClicked ?
                <div>
                    <h4> {props.ship.name}</h4>
                    <p>MGLT: {props.ship.MGLT}</p>
                    <p>Capacity {props.ship.cargo_capacity}</p>
                    <p>Consumables: {props.ship.consumables}</p>
                    <p>Cost: {props.ship.cost_in_credits}</p>
                    <p>Passengers: {props.ship.passengers}</p>
                    <p>Max speed: {props.ship.max_atmosphering_speed}</p>
                    <p>Hyperdrive rating: {props.ship.hyperdrive_rating}</p>
                    <p>Class: {props.ship.starship_class}</p>
                    <p>Length: {props.ship.length}</p>
                </div>
                :
                <div>
                    <h5> {props.ship.name} </h5>
                </div>
            }
        </div>

    )
};