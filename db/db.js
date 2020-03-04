"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../config/database");
var sequelize_1 = require("sequelize");
// const Sequelize = require("sequelize");
var db = new sequelize_1.Sequelize(database_1.database, database_1.username, database_1.password, {
    host: "localhost",
    dialect: "sqlite",
    storage: "./schoolsystem.db"
});
var Course = db.define("courses", {
    name: {
        type: sequelize_1.Sequelize.STRING,
        allowNull: false
    }
}, { timestamps: false });
var Batch = db.define("batches", {
    name: {
        type: sequelize_1.Sequelize.STRING,
        allowNull: false
    }
}, { timestamps: false });
Batch.belongsTo(Course);
var Subject = db.define("subjects", {
    name: {
        type: sequelize_1.Sequelize.STRING,
        allowNull: false
    }
}, { timestamps: false });
Subject.belongsTo(Course);
var Teacher = db.define("teachers", {
    name: {
        type: sequelize_1.Sequelize.STRING,
        allowNull: false
    },
    mobile: {
        type: sequelize_1.Sequelize.STRING
    },
    email: {
        type: sequelize_1.Sequelize.STRING
    }
}, { timestamps: false });
Teacher.belongsTo(Subject);
var Lecture = db.define("lectures", {
    name: {
        type: sequelize_1.Sequelize.STRING,
        allowNull: false
    }
}, { timestamps: false });
Lecture.belongsTo(Batch);
Lecture.belongsTo(Subject);
Lecture.belongsTo(Teacher);
Lecture.belongsTo(Course);
var Student = db.define("students", {
    name: {
        type: sequelize_1.Sequelize.STRING,
        allowNull: false
    },
    mobile: {
        type: sequelize_1.Sequelize.STRING
    },
    email: {
        type: sequelize_1.Sequelize.STRING
    }
}, { timestamps: false });
Student.belongsTo(Batch);
Batch.belongsToMany(Student, { through: "BatchStudent" });
Student.belongsToMany(Batch, { through: "BatchStudent" });
db.sync()
    .then();
exports.default = {
    Teacher: Teacher,
    Subject: Subject,
    Student: Student,
    Course: Course,
    Batch: Batch,
    Lecture: Lecture
};
