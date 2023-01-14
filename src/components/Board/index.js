import React from "react";
import { Card } from "../Card";

export const Board = (props) => {

    return (
        <div>
           <h2> Board of Starwars </h2>
           <div className="board">
             {props.ss.map(s => {
                return <Card key={s.name} ship = {s}/> 
             })}
           </div>
        </div>
    )
};