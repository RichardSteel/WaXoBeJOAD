var express = require('express');
var router = express.Router();
var ctrlArcher = require('../controllers/archer');
var ctrlCoach = require('../controllers/coach');
var ctrlHome = require('../controllers/home');
var ctrlInfo = require('../controllers/info');
var ctrlSignUp = require('../controllers/signup');
var ctrlEquipment = require('../controllers/equipment');
var ctrlCoachEquip = require('../controllers/coachEquip');

/* GET home page. */
router.get('/archer', ctrlArcher.studentInfo);
router.get('/coach', ctrlCoach.coachLogin);
router.get('/', ctrlHome.landing);
router.get('/info', ctrlInfo.archeryInfo);
router.post('/signin', ctrlSignUp.coachArea);
router.get('/equipment', ctrlEquipment.equipmentList);
router.get('/coachEquip', ctrlCoachEquip.coachEquip);

module.exports = router;
