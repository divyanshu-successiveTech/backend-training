"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const route_1 = require("./routes/route");
const app = express();
const port = 3000;
app.use("/begin", route_1.Allrouter);
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
