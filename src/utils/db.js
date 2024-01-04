import { Sequelize } from "sequelize";
import "dotenv/config";

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPW = process.env.DB_PW;
const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT;
const dbDialect = process.env.DB_DIALECT;

const sequelize = new Sequelize(dbName, dbUser, dbPW, {
  host: dbHost,
  port: dbPort,
  dialect: dbDialect,
  logging:
    process.env.NODE_ENV == "development"
      ? (...msg) => console.log(msg)
      : false,
//   dialectOptions: {
//     requestTimeout: 30000,
//     encrypt: true,
//   },
});

export default sequelize;
