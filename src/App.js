import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import Navbar from './components/navbar';
import Home from './pages/home';
import Rooms from './pages/rooms';
import Room from './pages/room';
import Error from './pages/error';

function App() {

  return (

    <div className="App">

      <Navbar />
      <Switch>
        <Route path="/" exact component={ Home }/>
        <Route path="/rooms" exact component={ Rooms }/>
        <Route path="/rooms/:room" exact component={ Room }/>
        <Route component={ Error }/>
      </Switch>

    </div>
  );
}

export default App;
