const express = require('express');
const app = express();
const port = 3000;
const db = require('../db.json')
const fs = require('fs')

const User = require('./models/User');
let userReady = false;
User.sync().then(() => {
    userReady = true;
})

const Task = require('./models/Task');
let taskReady = false;
Task.sync().then(() => {
    taskReady = true;
})

app.use(express.static('./client/'));
app.use('/tasks/:id', express.static('./client/'));
app.use(express.json())

app.get('/api/alltasks', (req, res, next) => {
    if (taskReady) {
        Task.findAll().then(result => {
            res.json(result);
        }).catch(error => {
            console.error(error);
            res.status(500);
            res.json({ error: 'Db error' });
        })
    }
})

app.get('/api/tasks/:id', (req, res, next) => {
    if (taskReady) {
        Task.findOne((req.params.id > 0) ? { where: {id: req.params.id} } : {})
        .then(task => {
            if (task === null) throw new Error('Wrong Id')
            res.json(task);
        })
        .catch(error => {
            console.error(error);
            res.json({ error: 'Wrong Id' });
        })
    }
})

app.post('/api/newtask', (req, res, next) => {
    if (taskReady) createNewTask(req, res)
})

function createNewTask(req, res) {
    Task.create(req.body).then(result => {
        console.log(result);
        res.status(201);
        res.json({message: "Success"});
    }).catch(error => {
        console.error(error);
        res.status(500);
        res.json({message: "Error"});
    })
    // db.push(req.body)
    // fs.writeFile('./db.json', JSON.stringify(db, null, 2), () => {
    //     res.json({ status: "success" })
    // })
}

app.listen(port, () => {
    console.log('Server started at http://localhost:' + port)
})