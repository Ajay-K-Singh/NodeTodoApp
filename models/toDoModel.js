const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    userName: String,
    toDo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

const ToDos = mongoose.model('ToDos', toDoSchema);

module.exports = ToDos;