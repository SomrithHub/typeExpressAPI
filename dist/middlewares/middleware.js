"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Middleware = /** @class */ (function () {
    function Middleware() {
    }
    Middleware.prototype.use = function (request, response, next) {
        console.log("do something...");
        // next();
    };
    return Middleware;
}());
exports.Middleware = Middleware;
//# sourceMappingURL=middleware.js.map