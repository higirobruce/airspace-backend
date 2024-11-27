require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const { isUndefined } = require("lodash");
const userDataModel = require("../models/users");

router.get("/", async (req, res) => {
  try {
    let users = await userDataModel.model.find();
    res.status(200).send(users);
  } catch (err) {}
});

router.post("/signup", async (req, res) => {
  let { username, names, role, status, email, agency, password } = req.body;
  try {
    let hashedPassword = await bcrypt.hash(password, 10);

    let newUser = userDataModel.model({
      username,
      email,
      password: hashedPassword,
      names,
      role,
      agency,
      status: status,
    });
    let createdUser = await newUser.save();
    res.status(201).send(createdUser);
  } catch (err) {
    res.status(500).send({
      message: `${err}`,
      error: true,
    });
  }
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let user = await userDataModel.model.findById(id);
    res.status(200).send(user);
  } catch (err) {}
});

router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await userDataModel.model.find({ email: email });
    if (user.length === 0) {
      res.status(404).send({
        message: "User not found!",
        error: true,
      });
      return;
    }

    let allowed = await bcrypt.compare(password, user[0].password);
    let active = user[0].status === "active";

    if (allowed) {
      if (active) {
        res.status(200).send({
          message: "Allowed",
          error: false,
          email: user[0].email,
          agency: user[0].agency,
          role: user[0].role,
          names: user[0].names.split(" ")[0],
        });
      } else {
        res.status(401).send({
          message: "Not active!",
          error: true,
        });
      }
    } else {
      res.status(401).send({
        message: "Not allowed! Check your credentials please.",
        error: true,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: `${err}`,
      error: true,
    });
  }
});

router.put("/", async (req, res) => {
  let { username, oldPassword, newPassword } = req.body;
  try {
    let user = await userDataModel.model.findOne({ username: username });
    let allowed = await bcrypt.compare(oldPassword, user?.password);
    if (allowed) {
      let hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();
      res.send({
        message: "Allowed",
        error: false,
        username: username,
        companyName: user.company,
      });
    } else {
      res.status(401).send({
        message: "Not allowed. Please check the Old password.",
        error: true,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: `${err}`,
      error: true,
    });
  }
});

router.put("/status", async (req, res) => {
  try {
    let { status, username, role, email, _id } = req.body;
    let user = await userDataModel.model.findById(_id);

    // user.status = status;
    // user.username = username ? username : user.username;
    // user.role = role ? role : user.role;
    // user.email = email ? email : user.email;
    user.status = status ? status : user.status;

    let updatedRecord = await user.save();
    res.status(201).send(updatedRecord);
  } catch (err) {
    res.status(500).send({ message: "Server Error!", error: `${err}` });
  }
});

router.delete("/:id", (req, res) => {});

module.exports = router;
