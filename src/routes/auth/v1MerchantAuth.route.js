const express = require('express');
const foobarController = require('../../controllers/foobar.controller');
const merchantAuth = require('../../middlewares/merchantAuth');

const router = express.Router({ mergeParams: true });

router.use(merchantAuth);

router.patch('/foobars', foobarController.getAll);

module.exports = router;
