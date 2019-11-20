import express, { Router } from "express";
import { applyRoutes } from "../utils/routes";
import { applyMiddleware } from "../utils/middleware";
import middleware from "../middleware";
import routes from "../services";

let router: Router;
router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);

export default router;
