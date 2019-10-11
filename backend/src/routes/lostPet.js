const { Router } = require('express');
const router = Router();

const { getlostPetOne, getlostPet, createlostPet, deletelost,uploadLost } = require('../controllers/lostPet.controller');

router.route('/')
    .get(getlostPet)
    .post(createlostPet);

router.route('/login')
    .post(getlostPetOne)
    .delete(deletelost);

router.route('/upload')
.post(uploadLost)

module.exports = router;