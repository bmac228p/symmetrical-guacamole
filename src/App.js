import React from 'react';
import Page from './Components/UniqueLinks';
import createEvents from './Components/createEvents';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path = "/page" component = {Page}/>
        <Route path = "/Create_Event" component = {createEvents}/>
      </div>
    </Router>
  );
}

export default App;
