import React from 'react';
import { render } from "react-dom";
import Switch from "./lib/switch";

const App = () => (
  <div style={{ display: 'flex', margin: 10 }}>
    <Switch color="yellow" width={40} height={20}/>
    <Switch color="green" width={100} height={50}/>
    <Switch color="red" width={200} height={100}/>
    <Switch color="blue" width={500} height={250}/>
  </div>
);

render(<App />, document.getElementById("root"));
