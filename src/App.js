import React from 'react';
import Page from './Components/UniqueLinks';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path = "/page" component = {Page}/>
      </div>
    </Router>
  );
}

export default App;
