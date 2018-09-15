const express = require("express"),
  { json } = require("body-parser"),
  port = 3001,
  app = express(),
  axios = require("axios");

let products = [];

axios.get("https://dogcompanydtx.com/api/products").then(response => {
  products = response.data;
});

app.get("/api/products", (req, res) => {
  console.log("req.query.q: ", req.query.q);
  if (req.query.q) {
    return res
      .status(200)
      .json(
        products.filter(c =>
          c.title.toLowerCase().includes(req.query.q.toLowerCase())
        )
      );
  }
  return res.status(200).json(products);
});

app.get("/api/products/:id", ({ params: { id } }, res) => {
  let product = products.filter(c => c._id === id);
  res.status(200).json(product);
});

app.use(json());

app.listen(port, () => console.log(`Listening @ ${port}`));
