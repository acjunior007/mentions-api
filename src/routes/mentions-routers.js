'use strict'

const express = require('express');
const router = express.Router();

const mentionsController = require('../controllers/mentions-controller');

// list
router.get('/', mentionsController.listMentions);
// create
router.post('/', mentionsController.createMention);

module.exports = router;
