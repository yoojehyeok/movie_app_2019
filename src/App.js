import React from "react";
import Introduction from "./routes/introduction";
import About from "./routes/About";
import Home from "./routes/Home";
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from "./routes/navigation"

function App(){
  return (
  <BrowserRouter> 
      <Navigation/>
      <Route path="/" exact component={Home} />
      <Route path="/home/introduction" component={Introduction} />
      <Route path="/about" component={About} />
  </BrowserRouter>
  ); 
}

export default App;