
import React, { useState } from "react";
import "./App.css";
import Display from './Display.js'



const  Dashboard = (props) => {
   const{ strike, setStrike, ball, setBall, foul, setFoul} =props;
    

    return (



        <div>


            <button className="setStrike" onClick={() => setStrike(strike + 1)}>Strike</button>
            <button className="setBall" onClick={() => setBall(ball + 1)}>Ball</button>
            <button className="setFoul" onClick={() => setFoul(foul + 1)}>Foul</button>
            
        </div>
    );
}

export default Dashboard;
