const express = require("express");

const app = express();
const env = require("dotenv").config();
const port = process.env.PORT || 2200;

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send("This is the free weather api!.");
});


app.listen(port, () => {
    console.log(`app is listening on http://localhost${port}`);
  });
  