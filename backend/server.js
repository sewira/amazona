const express = require("express");
const { products } = require("./data");
const data = require("./data");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server on");
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  console.log(product);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server ready at http://localhost:${PORT} `);
});
