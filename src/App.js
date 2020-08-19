import React from 'react';
import './App.css';
import {  BrowserRouter as Router,} from 'react-router-dom';
import Nav from './Components/Nav/nav';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Goat</h1>
        <Router>
        <Nav/>
        </Router>
      </header>
    </div>
  );
}

export default App;
