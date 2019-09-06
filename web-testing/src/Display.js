import React from "react";
import "./App.css";

const Display = (props) => {
   const { strike, ball, foul} = props;
    return (


<div>
            <h2 className="strikesDisplay">Strikes</h2>
            <div className="strike">{strike}</div>
            <h2 className="ballDisplay">Balls</h2>
            <div className="ball">{ball}</div>
            <h2 className="foulDisplay">Fouls</h2>
            <div className="foul">{foul}</div>

</div>
        
    );
}

export default Display;