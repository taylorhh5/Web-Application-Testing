import React, { useState } from "react";
import "./App.css";
import Dashboard from './Dashboard.js'
import Display from './Display.js'





function App() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [foul, setFoul] = useState(0);



  return (
    <div className="container">
      <Dashboard strike={strike} setStrike={setStrike} ball ={ball} setBall={setBall} foul={foul} setFoul={setFoul} />

      <Display strike={strike} ball={ball}foul={foul}/>
    </div>
  );
}

export default App;
