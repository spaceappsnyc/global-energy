import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import Map from './Map'

function App() {
  return (
    <div className="App">
      <Route exact path = '/' component = {Map} />
      {/* <Route path = '/about' component={About} /> */}
    </div>
  );
}

export default App;
