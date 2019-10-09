const { Router } = require('express');
const router = Router();

const { getLosts, getLost, createLost, deleteLost } = require('../controllers/lostPet.controller');

router.route('/')
    .get(getLosts)
    .post(createLost);

router.route('/login')
    .post(getLost)
    .delete(deleteLost);

module.exports = router;