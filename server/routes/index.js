const express = require('express'),
      router = express.Router(),
      indexController = require('../controllers/indexController.js');

router.get('/', indexController.index);

module.exports = router;
