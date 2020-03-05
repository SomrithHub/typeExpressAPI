import "reflect-metadata"; // this shim is required
import { createExpressServer } from "routing-controllers";
import { UserController } from "./Controllers/UserController";
import { AdminController as UserApi } from "./Controllers/Api/v1/AdminController";

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  controllers: [UserController, UserApi] // we specify controllers we want to use
});
// run express application on port 3000
app.listen(3000);
console.log('Express app start on port 3000\n\n*** All Routes ***\n');

app._router.stack.forEach(function(r){
  if (r.route && r.route.path){
    console.log(r.route.path)
  }
})
