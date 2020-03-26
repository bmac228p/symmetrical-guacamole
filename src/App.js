import React from 'react';
import Page from './Components/UniqueLinks';
import createEvents from './Components/createEvents';
import EventList from './Components/eventList';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path = "/page" component = {Page}/>
        <Route path = "/" exact component = {EventList}/>
        <Route path = "/newEvent" component = {createEvents}/>
      </div>
    </Router>
  );
}

export default App;
