var todosModel = require('../models/toDoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.get('/api/toDos/:uname', function(req, res) {
        todosModel.find({ userName: req.params.uname },
            function(err, todos) {
                if (err) throw err;
                res.send(todos);
            });
    });
    app.get('/api/toDos/:id', function(req, res) {
        todosModel.findById({ _id: req.params.id },
            function(err, todos) {
                if (err) throw err;
                res.send(todos);
            });
    });
    app.post('/api/toDos', function(req, res) {
        if (req.body.id) {
            todosModel.findById(req.body.id, {
                    todo: req.body.todo,
                    isDone: req.body.isDone,
                    haAttachment: req.body.haAttachmnent
                },
                function(err, todos) {
                    if (err) throw err;
                    res.send('Success');
                });
        } else {
            var newTodo = todosModel({
                userName: 'ajay_',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachmnent
            });
            newTodo.save(function(err) {
                if (err) throw err;
                res.send('Success');
            });
        }
    });

    app.delete('api/todos', function(req, res) {
        todosModel.findByIdAndRemove(req.body.id,
            function(err) {
                if (err) throw err;
                res.send('Success');
            })
    });
}