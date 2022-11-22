require('dotenv').config()

// coneksi database
const mysql = require('mysql')
const conn = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_name
})

// check koneksi jika error
conn.connect((err) => {
  if (err) console.log(`Database Connection Error: ${err}`);
})

module.exports = conn