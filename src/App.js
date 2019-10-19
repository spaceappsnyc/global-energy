import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './Views/About'
import Electricity from './Views/Electricity'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route path = '/about' component={About} />
      <Route path='/electricity' component={Electricity} />
    </div>
  );
}

export default App;
