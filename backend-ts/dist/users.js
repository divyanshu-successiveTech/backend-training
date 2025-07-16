"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const users = [
    { id: 1, data: "Data1" },
    { id: 2, data: "Data2" },
    { id: 3, data: "Data3" },
    { id: 3, data: "Data4" },
    { id: 5, data: "Data5" },
];
const middleware = (req, res, next) => {
    res.status(500).json({
        error: "Server Error"
    });
};
app.use(middleware);
app.get("/api/users", middleware, (req, res) => {
    res.json(users);
});
app.get("/api/abc", (req, res) => {
    res.send("ABC");
});
app.listen(3000, () => {
    console.log(`Running on port ${3000}`);
});
