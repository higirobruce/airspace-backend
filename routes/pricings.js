const route = require("express").Router();
const PricingsDataModel = require("../models/pricings");
const _ = require("lodash");

route.get("/", async (req, res) => {
  try {
    let records = await PricingsDataModel.model.find({});

    res.status(200).send(records);
  } catch (err) {
    res.send(err).status(500);
  }
});

route.get("/bycode", async (req, res) => {
  try {
    let records = await PricingsDataModel.model.find({
      pricingCode: req.query.code,
    });

    console.log(records);

    res.status(200).send(records);
  } catch (err) {
    res.send(err).status(500);
  }
});

route.post("/", async (req, res) => {
  console.log(req.body);
  try {
    let newRecord = new PricingsDataModel.model(req.body);

    let createdRecord = await newRecord.save();

    res.status(201).send(createdRecord);
  } catch (err) {
    res.send(err);
  }
});

module.exports = route;
