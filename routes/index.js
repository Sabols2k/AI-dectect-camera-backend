const express = require('express');
const router = express.Router();

router.use('/camera',require('./cameraRoutes'))
router.use('/',require('./authRoutes'));

module.exports = router;
