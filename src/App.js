import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import SolarRad from './Views/SolarRad'
import About from './Views/About'

function App() {
  return (
    <div className="App">
      <Route path = '/about' component={About} />
      <Route path = '/solrad' component={SolarRad}/>
      
    </div>
  );
}

export default App;
