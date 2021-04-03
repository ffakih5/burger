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

router.post('/api/burgers', (req, res) => {
    burger.addBurger(req.body.burger_name, (result) => {
        res.status(200).end();
    });
});

router.post('/api/burgers/:id', (req, res) => {
    burger.updateBurger(req.body.devoured, req.params.id, (result) => {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();

    });
});

module.exports = router;