var express = require('express');
var router = express.Router();
//var ctrlArcher = require('../controllers/archer');
var ctrlSession = require('../controllers/sessions');
var ctrlStudent = require('../controllers/students');
var ctrlCoach = require('../controllers/coaches');
var ctrlHome = require('../controllers/home');
var ctrlInfo = require('../controllers/info');
var ctrlSignUp = require('../controllers/signup');
var ctrlEquipment = require('../controllers/equipment');

/* GET home page. */
router.get('/sessions', ctrlSession.getAllSessions);
router.get('/students', ctrlStudent.getAllStudents);
//router.get('/coach', ctrlCoach.coachLogin);
router.get('/', ctrlHome.landing);
router.get('/info', ctrlInfo.archeryInfo);
router.post('/signin', ctrlSignUp.coachArea);
router.get('/equipmentList', ctrlEquipment.equipmentList);

module.exports = router;