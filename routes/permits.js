const route = require("express").Router();
const permitsDataModel = require("../models/permits");
const _ = require("lodash");

route.get("/", async (req, res) => {
  try {
    let permitsData = await permitsDataModel.model
      .find()
      .populate("operatorId")
      .populate("aircraftId")
      .populate("substituteAircrafts");
    res.status(200).send(permitsData);
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

route.get("/:id", async (req, res) => {
  try {
    let permitsData = await permitsDataModel.model.findById({
      _id: req.params.id,
    });
    res.status(200).send(permitsData);
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

route.get("/status/:status", async (req, res) => {
  try {
    let permitsData = await permitsDataModel.model.find({
      permitStatus: req.params.status,
    });
    res.status(200).send(permitsData);
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

route.post("/", async (req, res) => {
  let {
    approvalNumber,
    operatorId,
    aircraftId,
    substituteAircrafts,
    permitStatus,
    invoices,
    createdOn,
    createdBy,
    permit,
    duration,
    flightRoutes,
    agency,
  } = req.body;
  try {
    let newPermitData = new permitsDataModel.model({
      approvalNumber,
      operatorId: operatorId == "" ? null : operatorId,
      aircraftId: aircraftId == "" ? null : aircraftId,
      substituteAircrafts,
      permitStatus,
      invoices,
      createdOn,
      createdBy,
      permit,
      duration,
      flightRoutes,
      agency,
    });
    let createdPermit = await newPermitData.save();
    res.status(201).send(createdPermit);
  } catch (err) {
    console.log(err);
    // console.log(req.body);
    res.status(401).send(`${err}`);
  }
});

route.put("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    permitsDataModel.model
      .findById({
        _id: id,
      })
      .then((permit) => {
        let updates = req.body;
        newPermit = _.extend(permit, updates);
        // console.log(updates);
        newPermit.save((error, result) => {
          if (error) res.status(500).send(`${error}`);
          else res.status(201).send(result);
        });
      });
  } catch (err) {
    // console.log(err);
    res.status(401).send(`${err}`);
  }
});

module.exports = route;
