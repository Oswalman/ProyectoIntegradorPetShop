const { Router } = require('express');
const router = Router();

const { getStore, getAllStore, createStore, deleteStore } = require('../controllers/store.controller');

router.route('/')
    .get(getAllStore)
    .post(createStore)

router.route('/search')
    .post(getStore)
    .delete(deleteStore)


module.exports = router;