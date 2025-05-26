const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

router.get('/', controller.getUsers);
router.get('/add', (req, res) => {
    res.render('add');
});

router.post('/add', controller.addUser);
router.get('/edit/:id', controller.editUser);
router.post('/update/:id', controller.updateUser);
router.get('/delete/:id', controller.deleteUser);

module.exports = router;