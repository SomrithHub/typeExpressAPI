/*

Developed by Abhishek Raj on 15-05-2018

*/
import express from "express";
import path from "path";
import cors from "cors";

import Student from "./db/db";

// const express = require("express");
// const path = require("path");

// var cors = require('cors')

// const {
//     Student
// } = require("./db/db");

const app = express();
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
const routes = {
  courses: require("./routes/courses"),
  students: require("./routes/students"),
  subjects: require("./routes/subjects"),
  teachers: require("./routes/teachers")
};
app.use("/courses", routes.courses);
app.use("/students", routes.students);
app.use("/subjects", routes.subjects);
app.use("/teachers", routes.teachers);
app.listen(process.env.PORT || 4444);
