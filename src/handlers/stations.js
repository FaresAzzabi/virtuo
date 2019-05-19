const Stations = require('../models/stations');

module.exports = {
  create: async (req, res) => {
    const { name } = req.body;
    try {
      const stationNameExist = await Stations.findOne({ name });
      if (stationNameExist) return res.boom.conflict('station name already exist');
      let station = new Stations({ name });
      station = await station.save();
      return res.json(station);
    } catch (e) {
      return res.boom.badRequest(e);
    }
  },
  get: async (req, res) => {
    const { id } = req.params;
    try {
      const station = await Stations.findById(id);
      if (!station) return res.boom.notFound('station not found');
      return res.json(station);
    } catch (e) {
      return res.boom.badRequest(e);
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const station = await Stations.findById(id);
      if (!station) return res.boom.notFound('station not found');
      if (station.name !== name) {
        const stationNameExist = await Stations.findOne({ name });
        if (stationNameExist) return res.boom.conflict('station name already exist');
      }
      station.name = name;
      station.save();
      return res.json(station);
    } catch (e) {
      return res.boom.badRequest(e);
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const station = await Stations.findById(id);
      if (!station) return res.boom.notFound('station not found');
      await station.remove();
      return res.json({ success: true });
    } catch (e) {
      return res.boom.badRequest(e);
    }
  },
};
