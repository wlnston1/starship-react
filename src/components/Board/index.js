import React from "react";


export const Board = (props) => {
    return (
        <div>
           <h2> Board of Starwars </h2>
           <ul>
             {props.ss.map(ship => {
                return <li id={ship.name}> </li> 
             })}
           </ul>
        </div>


    )
};