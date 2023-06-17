const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 1000;
const upload = require("express-fileupload");

const FE_FS_PATH = path.join(__dirname, "..", "frontend");
const ordersFilePath = path.join(__dirname, "data");

app.use(express.static(FE_FS_PATH));
app.use(express.json());


const date = new Date();
let currentMaxId = 0;
app.post("/orders/:name", (req, res) => {
  const formData = req.body;
  const name = decodeURIComponent(req.params.name);

  if (!formData) {
    return res.status(400).send("Missing form data.");
  }
  currentMaxId++;
  const customerData = {
    id: currentMaxId,
    date: date,
    formData: formData,
  };

  const fileName = `${name.replace(/\s+/g, "_")}_${currentMaxId}.json`;
  const newFilePath = path.join(__dirname, "data", fileName);

  fs.writeFile(
    newFilePath,
    JSON.stringify(customerData, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Error: It can't saved");
      }

      return res.send("Saved");
    }
  );
});

app.get("/orders", (req, res) => {
  fs.readdir(ordersFilePath, (err, files) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error: It can't read");
    }

    const orders = files.map((file) => {
      const filePath = path.join(ordersFilePath, file);
      const fileData = fs.readFileSync(filePath, "utf8");
      return JSON.parse(fileData);
    });

    return res.send(orders);
  });
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


