
import React from "react";
import "./App.css";

const Dashboard = (props) => {
    const { strike, setStrike, ball, setBall, foul, setFoul } = props;

    const strikeTotal = () => {
        if (strike < 3) {
            setStrike(strike + 1)
        } else {
            setStrike(0);
        }
    }

    const ballTotal = () => {
        if (ball < 4) {
            setBall(ball + 1)
        } else {
            setBall(0);
        }
    }
    const foulTotal = () => {
        if (strike < 2) {
            setStrike(strike + 1)
        }

    }

    const hit = () => {
        setStrike(0) || setBall(0) || setFoul(0)
    }
    return (
        <div>
            <button className="setStrike" onClick={() => strikeTotal()}>Strike</button>
            <button className="setBall" onClick={() => ballTotal()}>Ball</button>
            <button className="setFoul" onClick={() => foulTotal(setFoul(foul + 1))}>Foul</button>
            <button className="setFoul" onClick={() => hit()}>HIT</button>
        </div>
    );
}

export default Dashboard;
