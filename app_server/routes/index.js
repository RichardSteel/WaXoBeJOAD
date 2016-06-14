var express = require('express');
var router = express.Router();
var ctrlArcher = require('../controllers/archer');
var ctrlCoach = require('../controllers/coach');
var ctrlHome = require('../controllers/home');
var ctrlInfo = require('../controllers/info');

/* GET home page. */
router.get('/archer', ctrlArcher.studentInfo);
router.get('/coach', ctrlCoach.coachLogin);
router.get('/', ctrlHome.landing);
router.get('/info', ctrlInfo.archeryInfo);

module.exports = router;
