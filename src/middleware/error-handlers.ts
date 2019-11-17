import { Request, Response, NextFunction, Router } from "express";
import * as ErrorHandler from "../utils/error-handler";

export const handleErrorClient = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.clientError(err, res, next);
  });
};

export const handleErrorServer = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.serverError(err, res, next);
  });
};
