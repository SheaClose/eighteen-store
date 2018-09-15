import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        onClick={() => this.props.clickHandler(this.props._id)}
        className="card"
      >
        <img src={this.props.imgUrl} alt="" />
        <h3>{this.props.title}</h3>
        <h3>${this.props.price}</h3>
      </div>
    );
  }
}
export default Card;
