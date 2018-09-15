import React, { Component } from "react";
//import './Input.css';

class Input extends Component {
  render() {
    return (
      <input
        name="input"
        type="text"
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.handleChange}
      />
    );
  }
}
export default Input;
