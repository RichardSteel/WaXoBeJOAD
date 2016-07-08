var express = require('express');
var router = express.Router();
var ctrlStudents = require('../controllers/students');
var ctrlSessions = require('../controllers/sessions');

// students
//Student get methods.
//Get all students
router.get('/students', ctrlStudents.getAllStudents);
//Get a specific student by id or name
router.get('/students/:studentId', ctrlStudents.getOneStudent);

// sessions
//Basic API to get the sessions
router.get('/sessions', ctrlSessions.getAllSessions);

module.exports = router;