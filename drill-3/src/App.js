import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGuest, removeGuest } from './ducks/guestList';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value
    }, () => console.log(this.state) )
  }
  handleSubmit(e) {
    e.preventDefault(); //if the form is empty, will not post.
    // add guest function here
    // we are referencing state, passing in text...
    this.props.addGuest(this.state.text);
    this.setState({
      text: ''
    })
  }


  render() {
    return (
      <div className="App">
        <h1>DevMountain Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {this.props.list.map( (guest, i) => {
            return (
              <div key={i} className="list-item">
                <li>{ guest }</li>
                <button type="" className="" onClick={ () => this.props.removeGuest(i) }>Remove</button>
              </div>
            )
          })}
        </ul>
        <form
          onSubmit={this.handleSubmit}
          className="add-guest"> Add guest: 
              <input
              value={this.state.text}
              onChange={this.handleInputChange}
              type="" className=""/>
          <button
            type=""
            className="">Add</button>
        </form>
      </div>
    );
  }
}

// mapStateToProps
function mapStateToProps(state){
  return{
    list: state,
  }
}
// connect                                ES6 knows that this is an object with a key value pair, so you only need to type addGuest once, it will set it to addGuest: addGuest...
export default connect(mapStateToProps, { addGuest, removeGuest })(App);