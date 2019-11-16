import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const connect = new Sequelize(
  `${process.env.DB_DRIVER}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
);

export default connect;
