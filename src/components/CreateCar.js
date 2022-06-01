import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateCar extends Component {
  constructor() {
    super();
    this.state = {
      make: '',
      model:'',
      type:'',
      broken:'',
      registered:''
    };
  }

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
      .post('http://localhost:8082/api/cars', data)
      .then(res => {
        this.setState({
          make: '',
          model:'',
          type:'',
          broken:'',
          registered:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateCar!");
      })
  };

  render() {
    return (
      <div className="CreateCar">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Car List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Car</h1>
              <p className="lead text-center">
                  Create new Car
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Make of Car'
                    name='make'
                    className='form-control'
                    value={this.state.make}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Model of Car'
                    name='model'
                    className='form-control'
                    value={this.state.model}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Type'
                    name='type'
                    className='form-control'
                    value={this.state.type}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Broken?'
                    name='broken'
                    className='form-control'
                    value={this.state.broken}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='registered'
                    name='registered'
                    className='form-control'
                    value={this.state.registered}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCar;