'use strict';

const express = require('express');
const router = express.Router();

// ver a versão
router.get('/ver', (req, res, next) => {
    res.status(200).send({
        title: 'MentionsAPI',
        version: '1.0.0'
    });
});

module.exports = router;
