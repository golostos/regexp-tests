const express = require('express');
const app = express();
const port = 3000;
const db = require('../db.json')
const fs = require('fs')
const User = require('./db');
User.sync({ force: true }).then(() => {
    return User.create({
        name: 'John',
        email: 'test@test.ru'
    });
})

app.use(express.static('./client/'));
app.use('/tasks/:id', express.static('./client/'));
app.use(express.json())

app.get('/api/tasks/:id', (req, res, next) => {
    let tasksResponse;
    if (db[req.params.id]) tasksResponse = db[req.params.id]
    else tasksResponse = { error: 'Wrong Id' }
    res.json(tasksResponse);
})

app.post('/api/newtask', (req, res, next) => {
    createNewTask(req, res)
})

function createNewTask(req, res) {
    db.push(req.body)
    fs.writeFile('./db.json', JSON.stringify(db, null, 2), () => {
        res.json({ status: "success" })
    })
}

app.listen(port, () => {
    console.log('Server started at http://localhost:' + port)
})