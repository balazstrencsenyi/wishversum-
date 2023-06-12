const express = require('express');
const app = express();
const port = 2000;
const path = require('path');
const fs = require('fs');
const fileUpload = require('express-fileupload');

const FE_FS_PATH = path.join(__dirname, "..", "frontend");

app.use(express.static(FE_FS_PATH));
app.use(express.json());






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


