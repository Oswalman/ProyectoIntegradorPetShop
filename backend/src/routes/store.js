const { Router } = require('express');
const router = Router();

const { getStore, getAllStore, createStore, deleteStore, uploadStore } = require('../controllers/store.controller');

router.route('/')
    .get(getAllStore)
    .post(createStore)

router.route('/create')
    .post(getStore)
    .delete(deleteUser)


module.exports = router;