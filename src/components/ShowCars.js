import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CarCard from './CarCard';

class ShowCars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/cars')
      .then(res => {
        this.setState({
          cars: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowCars');
      })
  };


  render() {
    const cars = this.state.cars;
    console.log("PrintCar: " + cars);
    let carList;

    if(!cars) {
      carList = "there is no car record!";
    } else {
      carList = cars.map((car, k) =>
        <CarCard car={car} key={k} />
      );
    }

    return (
      <div className="ShowCars">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Cars</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-car" className="btn btn-outline-warning float-right">
                + Add New Car
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {carList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowCars;