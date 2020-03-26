"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql2');
// create the connection to database
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'typescript',
    port: '3306'
});
exports.default = connection;
//# sourceMappingURL=database.js.map