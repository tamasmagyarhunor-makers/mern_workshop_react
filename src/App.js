import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateCar from './components/CreateCar';
import ShowCars from './components/ShowCars';
import ShowCarDetails from './components/ShowCarDetails';
import UpdateCar from './components/UpdateCar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowCars} />
          <Route path='/create-car' component={CreateCar} />
          <Route path='/edit-car/:id' component={UpdateCar} />
          <Route path='/show-car/:id' component={ShowCarDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
