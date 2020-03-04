import { Sequelize } from 'sequelize';

const database = "learningsystem";
const username = "root";
const password = "root";

const Connection = new Sequelize(database, username, password, {
    host: "localhost",
    dialect: "sqlite",
    storage: "./schoolsystem.db"
  });

global.console(Connection);

export default Connection;