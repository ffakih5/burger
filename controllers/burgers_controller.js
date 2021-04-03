const express = require('express');
const burger = require('../models/burger')

const router = express.Router();

router.get('/', (req, res) => {
    burger.allBurgers((data) => {
        const hbsObject = {
            burgers: data,
        };
        res.render('index', hbsObject);
    });
});