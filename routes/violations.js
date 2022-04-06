require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const { isUndefined } = require("lodash");
const violationModel = require("../models/violations");

router.get("/", async (req, res) => {
  try {
    let violations = await violationModel.model.find();
    res.status(200).send(violations);
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

router.post("/", async (req, res) => {
  console.log(req);
  try {
    let {
      aircraft,
      flightType,
      operator,
      registrationNumber,
      mtow,
      homebase,
      pilotNames,
      pilotLicenseNumber,
      entryPoint,
      exitPoint,
      entryDate,
      exitDate,
    } = req.body;

    let newViolationData = new violationModel.model({
      aircraft,
      flightType,
      operator,
      registrationNumber,
      mtow,
      homebase,
      pilotNames,
      pilotLicenseNumber,
      entryPoint,
      exitPoint,
      entryDate,
      exitDate,
    });

    let createdViolation = await newViolationData.save();
    res.status(201).send(createdViolation);
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

module.exports = router;
