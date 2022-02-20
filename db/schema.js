const fs= require('fs')
require('dotenv').config()
var sql_string = fs.readFileSync('db/schema.sql').toString();

const mysql = require('mysql2/promise');

module.exports = db = {};

initialize();

async function initialize() {
console.log (sql_string)
    const connection = await mysql.createConnection({ host: 'localhost', user: process.env.DB_USER, password: process.env.DB_PW });
    for (const sql of sql_string.split("\n")){
        if (sql) {
            await connection.query(sql);
        }
    }
    
process.exit(0)
}
