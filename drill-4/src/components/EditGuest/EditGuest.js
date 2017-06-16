import React, { Component } from 'react';
import './EditGuest.css';
import { connect } from 'react-redux';
import { updateGuest } from './../../ducks/guestList'

class EditGuest extends Component {
  // has its own input box, needs to keep track of what is being typed. //
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.guest
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.update = this.update.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  update() {
    // update guest name function
    this.props.updateGuest(this.state.text, this.props.guestIndex);
    this.props.hide();
  }



  render() {
    return (
      <div className="modal-bg">
        <div className="modal">
          <input
            onChange={this.handleInputChange}
            value={this.state.text}
            type=""
            className="modal-input"/>
          <button
            onClick={this.update}
            type=""
            className="modal-btn">Update</button>
          <button
            onClick={this.props.hide}
            type=""
            className="modal-btn">Cancel</button>
        </div>
      </div>
    )
  }
}

// no mapStateToProps, first argument is 'null', second argument is object
export default connect(null, {updateGuest})(EditGuest);
