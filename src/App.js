import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const Hat = () => {
  return (
    <h1>HAT pages</h1>
  )
}

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' component={Hat}/>
    </div>
  );
}

export default App;
