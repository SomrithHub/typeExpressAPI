import "reflect-metadata"; // this shim is required
import { createExpressServer, UseAfter } from "routing-controllers";
import { UserController } from "./Controllers/Api/v1/UserController";
import { AdminController as UserApi } from "./Controllers/Api/v1/AdminController";
import { Middleware } from "./middlewares/middleware";
let compression = require("compression");

/*  creates express app, registers all controller routes
    and returns you express app instance
*/
const app = createExpressServer({
  routePrefix: "/api",
  controllers: [UserController, UserApi]
});
app.listen(3000, function() {
  console.log("\n => Express app start on port 3000\n\n*** All Routes ***\n");
});

const NewRoute = [];
let i = 0;
app._router.stack.forEach(function(r){
  if (r.route && r.route.path){
    NewRoute[i]=r.route.path
    i+=1
  }
})
console.table(NewRoute);

app.use(compression());
