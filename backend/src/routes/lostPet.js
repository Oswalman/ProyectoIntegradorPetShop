const { Router } = require('express');
const router = Router();

const { getlostPetOne, getlostPet, createlostPet, deletelost } = require('../controllers/lostPet.controller');

router.route('/')
    .get(getlostPet)
    .post(createlostPet);

router.route('/login')
    .post(getlostPetOne)
    .delete(deletelost);

module.exports = router;