const ToDos = require('../models/toDoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', function(req, res) {
        //seed Database
        const toDos = [{
                userName: 'Ajay',
                toDo: 'Work Hard',
                isDone: false,
                hasAttachment: false
            },
            {
                userName: 'Minakshi',
                toDo: 'Work Hard',
                isDone: false,
                hasAttachment: false
            },
            {
                userName: 'Nitesh',
                toDo: 'Work Hard',
                isDone: false,
                hasAttachment: false
            }

        ];
        ToDos.create(toDos, function(error, results) {
            res.send(results);
        });
    });
}