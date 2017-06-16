import React, { Component } from 'react';
import store from './store';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>DevMountain Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {this.props.guestList.map( (guest, i) => {
            return (
              <div key={i} className="list-item">
                <li>{guest}</li>
                <button type="" className="">Remove</button>
              </div>
            )
          })}
        </ul>
        <div className="add-guest">
          Add guest: <input type="" className=""/>
          <button type="" className="">Add</button>
        </div>
      </div>
    );
  }
}

// mapStateToProps -- state reps entire global application state from redux store. Then we can pull off anything we need. Whatever gets returned from this function, gets returned to props.
function mapStateToProps(state){
  return {
    guestList: state,
  }
}
//connect
export default connect(mapStateToProps)(App)