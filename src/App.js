import React, { Component } from "react";
import Input from "./Components/Input";
import Button from "./Components/Button";
import Card from "./Components/Card";
import Product from "./Components/Product";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      products: [],
      home: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.changePage = this.changePage.bind(this);
  }
  componentDidMount() {
    axios
      .get("/api/products")
      .then(response => this.setState({ products: response.data }));
  }

  handleSearch() {
    axios.get("/api/products?q=" + this.state.input).then(res => {
      this.setState({ products: res.data });
    });
  }

  handleChange(e) {
    // handleChange({taget:{value,name}}){
    this.setState({ [e.target.name]: e.target.value });
  }
  changePage(_id) {
    console.log("_id: ", _id);
    if (typeof _id == "string") {
      axios.get("/api/products/" + _id).then(res => {
        this.setState({ products: res.data });
      });
    } else {
      axios.get("/api/products").then(response => {
        console.log("response: ", response);
        this.setState({ products: response.data });
      });
    }
    this.setState({ home: !this.state.home });
  }

  render() {
    let products = this.state.products
      .filter((c, i, a) => {
        return i === a.findIndex(cur => cur.title == c.title);
      })
      .map(c => {
        return (
          <Card
            clickHandler={this.changePage}
            imgUrl={c.imgUrl}
            title={c.title}
            price={c.price}
            _id={c._id}
          />
        );
      });
    return (
      <div className="App">
        <header className="App-header">
          <Input
            handleChange={this.handleChange}
            placeholder="Search For Product"
            value={this.state.input}
          />
          <Button title={"Search"} handleClick={this.handleSearch} />
        </header>
        {this.state.home ? (
          products
        ) : (
          <Product
            clickHandler={this.changePage}
            product={this.state.products[0]}
          />
        )}
      </div>
    );
  }
}

export default App;
