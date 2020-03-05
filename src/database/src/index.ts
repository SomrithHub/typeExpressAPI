import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "../../models/User";

createConnection()
  .then(async connection => {
    console.log("Inserting a new user into the database...");
    const user = new User();


  })
  .then(resp => process.exit(1))
  .catch(error => console.log(error));
