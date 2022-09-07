const route = require("express").Router();
const clearanceTypesDataModel = require("../models/clearance_types");
const _ = require("lodash");

route.get("/", async (req, res) => {
  try {
    let records = await clearanceTypesDataModel.model.find({});

    res.status(200).send(records);
  } catch (err) {
    res.send(err).status(500);
  }
});

route.post("/", async (req, res) => {
  try {
    let newRecord = new clearanceTypesDataModel.model(req.body);

    let createdRecord = await newRecord.save();

    res.status(201).send(createdRecord);
  } catch (err) {
    res.send(err);
  }
});

module.exports = route;
