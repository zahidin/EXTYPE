import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const connectionPool: any =
  process.env.APP_ENV == "developemnt"
    ? {}
    : {
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
      };

const connect = new Sequelize(
  `${process.env.DB_DRIVER}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  {
    ...connectionPool,
    logging:
      process.env.DB_LOGGING != "false"
        ? (...msg: any) => console.log(msg)
        : false
  }
);

export default connect;
