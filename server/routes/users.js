const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

router.route('/POST/user')
    .post(UserController.create)
// .get(UserController.create)

// router.post('/POST/user',UserController.create)
// router.get('/POST/user', UserController.create)

router.route('/GET/users')
    .get(UserController.index)

router.route('/GET/users/:userId')
    .get(UserController.show)

router.route('/PUT/users/:userId')
    .put(UserController.update)

router.route('/DELETE/users/:userId')
    .delete(UserController.delete)

module.exports = router;