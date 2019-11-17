import { Request, Response, NextFunction, Router } from "express";
import morgan from "morgan";
import path from "path";
import fs from "fs";
import { configLogger } from "../config/logging";

export const handleLogging = (router: Router) => {
  const accessLogStream = fs.createWriteStream(
    path.join(configLogger.path, configLogger.fileName),
    { flags: "a" }
  );

  router.use(
    morgan("common", {
      stream: accessLogStream,
      skip: (req: Request, res: Response) =>
        !configLogger.allRequest ? res.statusCode < 400 : false
    })
  );
};
