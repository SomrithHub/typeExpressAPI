// const express = require("express");
import express from "express";
const route = express.Router();
import Course from "../db/db";
import Batch from "../db/db";

// export const Course = require("../db/db");
// export const Batch = require("../db/db");

route.get("/", (req, res) => {
  Course.findAll()
    .then(courses => {
      res.status(200).send({
        success: true,
        courses
      });
    })
    .catch(err => {
      res.status(500).send({
        success: false,
        message: "Error! Something is not right"
      });
    });
});

route.get("/:id", (req, res) => {
  Course.findById(req.params.id)
    .then(courses => {
      res.status(200).send({
        success: true,
        courses
      });
    })
    .catch(err => {
      res.status(500).send({
        success: false,
        message: "Error! Something is not right"
      });
    });
});

route.get("/:id/batches", (req, res) => {
  const courseId = req.params.id;
  Batch.findAll({
    where: {
      courseId
    }
  })
    .then(batches => {
      res.status(200).send({
        success: true,
        batches
      });
    })
    .error(error => {
      res.status(500).send({
        success: false,
        message: "Error! Something is not right"
      });
    });
});

route.get("/:id/batches/:bid", (req, res) => {
  const courseId = req.params.id;
  Batch.findOne({
    where: {
      courseId,
      id: req.params.bid
    }
  })
    .then(batch => {
      res.status(200).send({
        success: true,
        batch
      });
    })
    .error(error => {
      res.status(500).send({
        success: false,
        message: "Error! Something is not right"
      });
    });
});

route.post("/addcourse", (req, res) => {
  Course.create(req.body)
    .then(course => {
      res.status(200).send({
        success: true,
        message: "saved to database"
      });
    })
    .catch(err => {
      res.status(500).send({
        success: false,
        message: "Error in database connectivity"
      });
    });
});

route.get("/:id/batches", (req, res) => {
  Batch.findAll({
    where: {
      courseId: req.params.id
    }
  })
    .then(resp => {
      resp.status(200).send({
        success: true,
        batches: res.data
      });
    })
    .catch(error => {
      res.status(500).send({
        success: false
      });
    });
});

export default route;
