import {
  handleCors,
  handleBodyRequestParsing,
  handleCompression
} from "./common";
import { handleErrorClient, handleErrorServer } from "./error-handlers";

export default [
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleErrorClient,
  handleErrorServer
];
