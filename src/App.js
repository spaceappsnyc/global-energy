import React from 'react';
import './App.css';
import Electricity from './Views/Electricity'
import {Route} from 'react-router-dom'
import SolarRad from './Views/SolarRad'
import About from './Views/About'

function App() {
  return (
    <div className="App">
      <Route path = '/about' component={About} />
      <Route path='/electricity' component={Electricity} />
      <Route path = '/radiation' component={SolarRad}/>
      
    </div>
  );
}

export default App;
