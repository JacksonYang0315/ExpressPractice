const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

// router.post('/POST/user', UserController.create);

router.route('/POST/user')
.post(UserController.create)

module.exports = router;