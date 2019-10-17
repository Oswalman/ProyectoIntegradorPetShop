const { Router } = require('express');
const router = Router();

const { getAdoptOne, getAllAdopt, createAdoptPet, deletelAdopt } = require('../controllers/adoptPet.controller');

router.route('/')
    .get(getAllAdopt)
    .post(createAdoptPet)

router.route('/search')
    .post(getAdoptOne)
    .delete(deletelAdopt);



module.exports = router;