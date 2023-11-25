var express = require('express');
var router = express.Router();
const userController = require('../controller/userController');


router.get('/', userController.getUser);
router.post('/', userController.addUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.UpdateUser);  

module.exports = router;
