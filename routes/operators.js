const route = require("express").Router();
const _ = require("lodash");
let operatorDataModel = require("../models/operators");

route.get("/", async (req, res) => {
  try {
    let operatorsData = await operatorDataModel.model.find();
    res.status(200).json(operatorsData);
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

route.get("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let operatorsData = await operatorDataModel.model.find({
      _id: id,
    });
    res.status(200).json(operatorsData);
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

route.post("/", async (req, res) => {
  let {
    name,
    country,
    caoIdentifier,
    iataIdentifier,
    nationalCarrier,
    operationsEmail,
    operationPhone,
    accountManagerName,
    accountManagerPhone,
    accountManagerEmail,
    operationManagerName,
    operationManagerPhone,
    operationManagerEmail,
    vatCertExpDate,
    airOpCertExpDate,
    agency,
  } = req.body;
  try {
    let operatorsData = new operatorDataModel.model({
      name,
      country,
      caoIdentifier,
      iataIdentifier,
      nationalCarrier,
      operationsEmail,
      operationPhone,
      accountManagerName,
      accountManagerPhone,
      accountManagerEmail,
      operationManagerName,
      operationManagerPhone,
      operationManagerEmail,
      vatCertExpDate,
      airOpCertExpDate,
      agency,
    });
    let createdOperator = await operatorsData.save();
    res.status(201).send(createdOperator);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

route.put("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    operatorDataModel.model
      .findById({
        _id: id,
      })
      .then((operator) => {
        let updates = req.body;
        newOperator = _.extend(operator, updates);
        newOperator.save((error, result) => {
          if (error) res.status(500).send(`${error}`);
          else res.status(201).send(result);
        });
      });
  } catch (err) {
    res.status(401).send(`${err}`);
  }
});

module.exports = route;
