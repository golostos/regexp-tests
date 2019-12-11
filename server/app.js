const express = require('express');
const app = express();
const port = 3000;
const db = require('../db.json')
const fs = require('fs')
const { check, validationResult } = require('express-validator');

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
app.use('/api/*', express.json())

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
        Task.findOne((req.params.id > 0) ? { where: { id: req.params.id } } : {})
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
        res.json({ message: "Success" });
    }).catch(error => {
        console.error(error);
        res.status(500);
        res.json({ message: "Error" });
    })
}

app.post('/api/users/new', [
    // name must be at least 5 chars long
    check('name').isLength({ min: 5 }),
    // email must be an email
    check('email').isEmail()
], (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const {name, email} = req.body;
    User.create({name, email}).then(user => {
        res.json(user);
    })
})

app.listen(port, () => {
    console.log('Server started at http://localhost:' + port)
})

// CRUD for resource
//          URL             Http methods
// create   /api/users/new  POST
// read     /api/users/:id  GET
// update   /api/users/:id  PATCH
// delete   /api/users/:id  DELETE


//oAuth2 provider vk ok google fb
// app.get('/api/test', (req, res, next) => {
//     console.log('Middleware 1');
//     next();
// }, (req, res, next) => {
//     console.log('Middleware 2');
//     next('error');
// }, (error, req, res, next) => {
//     console.log('Middleware 3');
//     res.end('All right');
// })

// app.get('/api/test2', (req, res, next) => {
//     console.log('Middleware 1');
//     next();
// })

// app.use('/api/test2', (req, res, next) => {
//     console.log('Middleware 2');
//     next();
// })

// app.use('/api/test2', (req, res, next) => {
//     console.log('Middleware 3');
//     res.end('All right');
// })

// app.use((error, req, res, next) => {
//     res.end(error);
// })