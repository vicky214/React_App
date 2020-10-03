const express = require('express')
const router = express.Router();
const Admin = require('../controller/adminController')

router.get('/getalluser',Admin.getalluser)
router.get('/getlicense',Admin.getlicense)
router.get('/getroles',Admin.getrole)
router.post('/getuserById',Admin.getuserById)
router.post('/updateuserById',Admin.updateuserById)
router.post('/changeStatus',Admin.changeStatus)
router.post('/activeUser',Admin.activeUser)
router.post('/deleteUser',Admin.deleteUser)
router.get('/getdepartment',Admin.Getdepartment)
router.post('/viewDepartment',Admin.viewDepartment)
router.post('/deleteDepartment',Admin.deleteDepartment)
router.post('/getdepartmentById',Admin.getdepartmentById)
router.post('/updateDepart',Admin.updateDepart)
router.post('/createDepart',Admin.createDepart)
router.post('/updateuser',Admin.UpdateUser)
router.post('/createuser',Admin.CreateUser)


module.exports = router;
