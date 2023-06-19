const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 1000;
const upload = require("express-fileupload");

const FE_FS_PATH = path.join(__dirname, "..", "frontend");
const dataFilePath = path.join(__dirname, "data", "orders.json");
const wishesFilePath = "./wishes.json";

app.use(express.static(FE_FS_PATH));
app.use(express.json());

let orders = []; // Initialize empty array to store orders

app.post("/orders/:name", (req, res) => {
  const formData = req.body;
  const name = decodeURIComponent(req.params.name);

  if (!formData) {
    return res.status(400).send("Missing form data.");
  }

  const order = {
    name: name,
    formData: formData
  };

  orders.push(order); // Add the order to the orders array

  fs.writeFile(
    dataFilePath,
    JSON.stringify(orders, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Error: It can't be saved.");
      }

      return res.send("Saved");
    }
  );
});

app.post("/orders", (req, res) => {
  const orderData = req.body;

  // Check if orderData is valid
  if (!orderData || !Array.isArray(orderData) || orderData.length === 0) {
    return res.status(400).send("Invalid order data.");
  }

  const date = new Date();
  let currentMaxId = 0;
  const orders = [];

  orderData.forEach((item) => {
    currentMaxId++;
    const order = {
      id: currentMaxId,
      date: date,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    };
    orders.push(order);
  });

  const fileName = `order_${date.getTime()}.json`;
  const newFilePath = path.join(__dirname, "data", fileName);

  fs.writeFile(
    newFilePath,
    JSON.stringify(orders, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Error: Could not save order.");
      }

      return res.json({ message: "Order saved successfully." });
    }
  );
});


app.get('/wishes', (req, res) => {
  fs.readFile(wishesFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error retrieving wishes');
    }

    const wishes = JSON.parse(data);
    res.json(wishes);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
