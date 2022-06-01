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
