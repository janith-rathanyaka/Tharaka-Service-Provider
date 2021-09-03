const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    user:"postgres",
    password:"wonder",
    port:5432,
    database:"Startup-Door"
})

pool.on('connect', () => {
  console.log('Connected to the Startup_Door in postgreSQL DB!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};