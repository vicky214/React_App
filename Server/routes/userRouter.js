const express = require('express')
const router = express.Router();
const User = require('../controller/userController')

router.get('/category',User.category)
router.get('/idletime',User.idletime)
router.get('/week',User.week)
router.post('/userLogin',User.userLogin)
router.post('/gettodaywork',User.gettodaywork)
router.post('/getyesterdaywork',User.getyesterdaywork)
router.post('/getlastWeekwork',User.getLastWeekwork)
router.post('/getlastMonthwork',User.getLastMonthwork)
router.post('/getlastYearwork',User.getLastYearwork)
router.post('/getallwork',User.getAllwork)

module.exports = router;
