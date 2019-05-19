const express = require('express');

const router = express.Router();

const stationsHandler = require('../src/handlers/stations');
const carsHandler = require('../src/handlers/cars');

// stations routes

router.post('/stations', stationsHandler.create);

router.get('/stations/:id', stationsHandler.get);

router.put('/stations/:id', stationsHandler.update);

router.delete('/stations/:id', stationsHandler.delete);

// cars routes

router.post('/cars', carsHandler.create);

router.get('/cars/:id', carsHandler.get);

router.put('/cars/:id', carsHandler.update);

router.delete('/cars/:id', carsHandler.delete);

module.exports = router;
