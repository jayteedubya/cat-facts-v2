const express = require('express');
const db = require('./databaseHandler.js');
const ejs = require('ejs');

const PORT = process.env.PORT || 4001;
const app = express();

app.set('view engine', 'ejs');

app.get('/htmlTest', (req, res, next) => {
    res.render('main.ejs');
})

app.get('/', (req, res, next) => {
    res.render('lone.ejs', {fact:''})
})

app.get('/All', async (req, res, next) => {
    const response = await db.getAll();
    res.render('all.ejs', {facts: response});
    return;
});

app.get('/random', async (req, res, next) => {
    const response = await db.getRandom();
    res.render('lone.ejs', {fact: response.fact});
    return;
})

app.get('/:id', async (req, res, next) => {
    const response = await db.getById(req.params.id);
    res.render('lone.ejs', {fact: response.fact});
    return;
})

app.get('/testDatabase22222', (req, res, next) => {
    const response = await db.dbTest();
    res.render('lone', {fact: response});
})




app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});