const express = require('express');
const merchantRoute = require('./v1MerchantAuth.route');
const auth = require('../../middlewares/auth');
const errorLogController = require('../../controllers/error_log.controller');

const router = express.Router({ mergeParams: true });

router.use(auth());

router.get('/error-logs', errorLogController.getAll);

router.use('/:id', merchantRoute);

module.exports = router;
