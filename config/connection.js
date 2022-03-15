// import sequelize
const Sequelize = require("sequelize");
// require dotenv to pull environment variables
require("dotenv").confiig();

//create connectioni to database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
