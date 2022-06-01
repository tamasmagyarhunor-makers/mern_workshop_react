import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateCarInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      make: '',
      model: '',
      type: '',
      broken: '',
      registered: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/cars/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, car: res.data})
        this.setState({
          make: res.data.make,
          model: res.data.model,
          type: res.data.type,
          broken: res.data.broken,
          registered: res.data.registered
        })
      })
      .catch(err => {
        console.log("Error from UpdateCarInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      make: this.state.make,
      model: this.state.model,
      type: this.state.type,
      broken: this.state.broken,
      registered: this.state.registered
    };

    axios
      .put('http://localhost:8082/api/cars/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-car/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateCarInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateCarInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Car List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Car</h1>
              <p className="lead text-center">
                  Update Car's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="make">Make</label>
              <input
                type='text'
                placeholder='Make of the Car'
                name='make'
                className='form-control'
                value={this.state.make}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="model">Model</label>
              <input
                type='text'
                placeholder='model'
                name='model'
                className='form-control'
                value={this.state.model}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="type">Type</label>
              <input
                type='text'
                placeholder='type'
                name='type'
                className='form-control'
                value={this.state.type}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="broken">Broken</label>
              <input
                type='text'
                placeholder='broken'
                name='broken'
                className='form-control'
                value={this.state.broken}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="registered">Registered</label>
              <input
                type='date'
                placeholder='registered'
                name='registered'
                className='form-control'
                value={this.state.registered}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Car</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateCarInfo;