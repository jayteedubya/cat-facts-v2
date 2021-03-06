const express = require('express');
const db = require('./databaseHandler.js');
const ejs = require('ejs');

const PORT = process.env.PORT || 4001;
const app = express();

app.get('/', async (req, res, next) => {
    response = await db.getAll();
    res.send(response);
});






app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});