import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showCarDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/cars/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showCarDetails-API-response: " + res.data);
        this.setState({
          car: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowCarDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/car/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowCarDetails_deleteClick");
      })
  };


  render() {

    const car = this.state.car;
    let CarItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Make</td>
            <td>{ car.make }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>model</td>
            <td>{ car.model }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>type</td>
            <td>{ car.type }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>broken</td>
            <td>{ car.broken }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Registered</td>
            <td>{ car.registered }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowCarDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Cars
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Car's Record</h1>
              <p className="lead text-center">
                  View Car's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { CarItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,car._id)}>Delete Car</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-car/${car._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Car
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Car</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Car</button> */}

        </div>
      </div>
    );
  }
}

export default showCarDetails;