const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

router.get('/', playerController.list);
router.post('/add', playerController.save);
router.get('/delete/:ID', playerController.delete);

router.get('/update/:ID', playerController.edit);
router.post('/update/:ID', playerController.update);

module.exports = router;
