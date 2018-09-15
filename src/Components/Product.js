import React, { Component } from "react";
//import './Product.css';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { imgUrl, description, title, price } = this.props.product;
    console.log("description: ", description);
    return (
      <div className="">
        <span onClick={this.props.clickHandler}>&#x3c; back</span>
        <img src={imgUrl} alt="" />
        <div style={{ float: "right", width: "50%", display: "inline-block" }}>
          <h1>{title}</h1>
          <h3>{description}</h3>
          <h5>${price}</h5>
        </div>
      </div>
    );
  }
}
export default Product;
