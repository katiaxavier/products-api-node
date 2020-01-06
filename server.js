const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27020/nodelinx", { useNewUrlParser: true, useUnifiedTopology: true });
requireDir('./src/models');

app.use('/', require('./src/routes'));

app.listen("9000");