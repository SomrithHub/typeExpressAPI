import "lodash";
// import express from "express";
import path from "path";
import cors from "cors";
import "reflect-metadata";
// import express, { Request, Response } from "express";
import UserController from "./decorator/UserController";
import { RouteDefinition } from "./Models/RouteDefinition";


import 'reflect-metadata';
import * as express from 'express';


// app.use(cors());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.use("/", express.static(path.join(__dirname, "public")));
// app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true
//   })
// );
// con
// Iterate over all our controllers and register our routes


const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello there!');
});

// Iterate over all our controllers and register our routes
[
  UserController
].forEach(controller => {
  // This is our instantiated class
  const instance                       = new controller();
  // The prefix saved to our controller
  const prefix                         = Reflect.getMetadata('prefix', controller);
  // Our `routes` array containing all our routes for this controller
  const routes: Array<RouteDefinition> = Reflect.getMetadata('routes', controller);
  
  // Iterate over all routes and register them to our express application 
  routes.forEach(route => {
    // It would be a good idea at this point to substitute the `app[route.requestMethod]` with a `switch/case` statement
    // since we can't be sure about the availability of methods on our `app` object. But for the sake of simplicity
    // this should be enough for now.
    app[route.requestMethod](prefix + route.path, (req: express.Request, res: express.Response) => {
      // Execute our method for this path and pass our express request and response object.
      instance[route.methodName](req, res);
    });
  });
});

app.listen(3000, () => {
  console.log('Started express on port 3000');
});