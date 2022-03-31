const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

const rebaseFunction = () => {
    console.log(123);
}

setInterval(rebaseFunction, 1000*60*30);

app.listen(5000, () => console.log('Server running at port 5000'));