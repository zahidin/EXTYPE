import { Request, Response, NextFunction, Router } from "express";
import morgan from "morgan";
import path from "path";
import fs from "fs";
import { configLogger } from "../config/logger";
import * as dotenv from "dotenv";
dotenv.config();

export const handleLogging = (router: Router) => {
  const accessLogStream = fs.createWriteStream(
    path.join(configLogger.path, configLogger.fileName),
    { flags: "a" }
  );
  if (process.env.APP_ENV != "production") {
    router.use(morgan("dev"));
  } else {
    router.use(
      morgan("combined", {
        stream: accessLogStream,
        skip: (req: Request, res: Response) =>
          !configLogger.allRequest ? res.statusCode < 400 : false
      })
    );
  }
};
