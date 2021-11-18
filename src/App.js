import React from "react";
import About from "./routes/About.js";
//import Home from "./routes/Home.js";
import { HashRouter, Route } from 'react-router-dom';

function App(){
  return (<HashRouter>
    <Route path="/about" component={About}/>
  </HashRouter>
  );
}

export default App;
