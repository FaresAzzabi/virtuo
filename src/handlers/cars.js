const Cars = require('../models/cars');
const Stations = require('../models/stations');

module.exports = {
  create: async (req, res) => {
    const { name, available, station } = req.body;
    try {
      const [stationExist, carNameExist] = await Promise.all([
        Stations.findById(station),
        Cars.findOne({ name }),
      ]);
      if (carNameExist) return res.boom.conflict('car name already exist');
      if (!stationExist) return res.boom.notFound('station not found');
      let car = new Cars({ name, available, station });
      car = await car.save();
      car = await car.populate('station').execPopulate();
      return res.json(car);
    } catch (e) {
      return res.boom.badRequest(e);
    }
  },
  get: async (req, res) => {
    const { id } = req.params;
    try {
      const car = await Cars.findById(id).populate('station');
      if (!car) return res.boom.notFound('car not found');
      return res.json(car);
    } catch (e) {
      return res.boom.badRequest(e);
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name, available, station } = req.body;
    try {
      const [car, stationExist] = await Promise.all([
        Cars.findById(id),
        Stations.findById(station),
      ]);
      if (!car) return res.boom.notFound('car not found');
      if (!stationExist) return res.boom.notFound('station not found');
      if (car.name !== name) {
        const carNameExist = await Cars.findOne({ name });
        if (carNameExist) return res.boom.conflict('car name already exist');
      }
      Object.assign(car, { name, available, station });
      car.save();
      return res.json(car);
    } catch (e) {
      return res.boom.badRequest(e);
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const car = await Cars.findById(id);
      if (!car) return res.boom.notFound('car not found');
      await car.remove();
      return res.json({ success: true });
    } catch (e) {
      return res.boom.badRequest(e);
    }
  },
};
