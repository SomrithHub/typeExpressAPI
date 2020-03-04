import { database, username, password } from "../config/database";
import { Sequelize } from "sequelize";
// const Sequelize = require("sequelize");

const db = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "sqlite",
  storage: "./schoolsystem.db"
});

const Course = db.define(
  "courses",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  { timestamps: false }
);
const Batch = db.define(
  "batches",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  { timestamps: false }
);
Batch.belongsTo(Course);

const Subject = db.define(
  "subjects",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  { timestamps: false }
);
Subject.belongsTo(Course);

const Teacher = db.define(
  "teachers",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    mobile: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
  },
  { timestamps: false }
);
Teacher.belongsTo(Subject);

const Lecture = db.define(
  "lectures",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  { timestamps: false }
);
Lecture.belongsTo(Batch);
Lecture.belongsTo(Subject);
Lecture.belongsTo(Teacher);
Lecture.belongsTo(Course);

const Student = db.define(
  "students",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    mobile: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
  },
  { timestamps: false }
);
Student.belongsTo(Batch);

Batch.belongsToMany(Student, { through: "BatchStudent" });
Student.belongsToMany(Batch, { through: "BatchStudent" });

db.sync()
  .then();

export default {
  Teacher,
  Subject,
  Student,
  Course,
  Batch,
  Lecture
};
