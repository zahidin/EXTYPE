import {
  handleCors,
  handleBodyRequestParsing,
  handleCompression
} from "./common";
import { handleErrorClient, handleErrorServer } from "./error-handlers";
import { handleLogging } from "./logging";

export default [
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleErrorClient,
  handleErrorServer,
  handleLogging
];
