import { Router, Request, Response, NextFunction } from "express";
import { prefixApiV1 } from "../config/prefix-url";
type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

type Route = {
  path: string;
  method: string;
  handler: Handler | Handler[];
};

export const applyRoutes = (routes: Route[], router: Router) => {
  for (const route of routes) {
    let { method, path, handler } = route;
    (router as any)[method.toLowerCase()](`${prefixApiV1}${path}`, handler);
  }
};
