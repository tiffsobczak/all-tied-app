const fs= require('fs')
require('dotenv').config()
var sql_string = fs.readFileSync('db/schema.sql').toString();

const mysql = require('mysql2/promise');

module.exports = db = {};

initialize();

async function initialize() {
console.log (sql_string)
    const connection = await mysql.createConnection({ host: 'localhost', profile: process.env.DB_USER, password: process.env.DB_PW });
    await connection.query(sql_string.replaceAll('\n', ''));
process.exit(0)
}
