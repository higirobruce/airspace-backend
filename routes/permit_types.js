const route = require("express").Router();
const permitTypesDataModel = require("../models/permit_types");
const _ = require("lodash");

route.get("/", async (req, res) => {
  try {
    let permit_types = await permitTypesDataModel.model.find({});

    res.status(200).send(permit_types);
  } catch (err) {
    res.send(err).status(500);
  }
});

route.post("/", async (req, res) => {
  try {
    let newPermitType = new permitTypesDataModel.model(req.body);

    let createdPermitType = await newPermitType.save();

    res.status(201).send(createdPermitType);
  } catch (err) {
    res.send(err);
  }
});

module.exports = route;
