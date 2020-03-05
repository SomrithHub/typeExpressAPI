import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "../../models/User";

createConnection['entities'] = [User]
createConnection()
  .then(async connection => {
    console.log("Inserting a new user into the database...");
    let user = await userRepository.find();
    
  })
  .then(resp => process.exit(1))
  .catch(error => console.log(error));
