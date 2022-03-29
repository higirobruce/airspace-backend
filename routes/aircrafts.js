const route = require("express").Router();
const aircraftsDataModel = require("../models/aircrafts");
const _ = require("lodash");

route.get("/", async (req, res) => {
  try {
    let aircraftsData = await aircraftsDataModel.model
      .find()
      .populate("operatorId");
    res.status(200).send(aircraftsData);
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

route.post("/", async (req, res) => {
  let {
    operatorId,
    registration,
    aircraftModel,
    mtow,
    aircraftType,
    homebase,
    serialNumber,
    seats,
    manufactureYear,
    noteToCaa,
    certAirWorthExpDate,
    certInsuranceExpDate,
    certNoiseExpDate,
    agency,
  } = req.body;

  try {
    let newAircraftData = new aircraftsDataModel.model({
      operatorId,
      registration,
      aircraftModel,
      mtow,
      aircraftType,
      homebase,
      serialNumber,
      seats,
      manufactureYear,
      noteToCaa,
      certAirWorthExpDate,
      certInsuranceExpDate,
      certNoiseExpDate,
      agency,
    });

    let createdAircraft = await newAircraftData.save();
    res.status(201).send(createdAircraft);
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

route.get("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let aircraftRecord = await aircraftsDataModel.model.findById({
      _id: id,
    });
    res.status(200).send(aircraftRecord);
  } catch (err) {}
});

route.put("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    aircraftsDataModel.model
      .findById({
        _id: id,
      })
      .then((aircraft) => {
        let updates = req.body;
        newAircraft = _.extend(aircraft, updates);
        newAircraft.save((error, result) => {
          if (error) res.status(500).send(`${error}`);
          else res.status(201).send(result);
        });
      });
  } catch (err) {
    res.status(401).send(`${err}`);
  }
});

module.exports = route;
