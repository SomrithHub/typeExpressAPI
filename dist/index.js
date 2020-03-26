"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // this shim is required
var routing_controllers_1 = require("routing-controllers");
var UserController_1 = require("./Controllers/Api/v1/UserController");
var AdminController_1 = require("./Controllers/Api/v1/AdminController");
var compression = require("compression");
/*  creates express app, registers all controller routes
    and returns you express app instance
*/
var app = routing_controllers_1.createExpressServer({
    routePrefix: "/api",
    controllers: [UserController_1.UserController, AdminController_1.AdminController]
});
app.listen(3000, function () {
    console.log("\n => Express app start on port 3000\n\n*** All Routes ***\n");
});
var NewRoute = [];
var i = 0;
app._router.stack.forEach(function (r) {
    if (r.route && r.route.path) {
        NewRoute[i] = r.route.path;
        i += 1;
    }
});
console.table(NewRoute);
app.use(compression());
//# sourceMappingURL=index.js.map