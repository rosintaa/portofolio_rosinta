const mysql = require('mysql');

//db credential
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'websinta'
})

conn.connect((error) => {
    if (error) throw error
    console.log('db connected..');
})

module.exports = conn;