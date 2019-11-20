import request from "supertest";
import router from "./initialize-express";
import promiseRequest from "request-promise";
import { prefixApiV1 } from "../config/prefix-url";

jest.mock("request-promise");
(promiseRequest as any).mockImplementation(() => '{"features": []}');

describe("user", () => {
  test("a test data user", async () => {
    const response = await request(router).get(`${prefixApiV1}/users`);
    expect(response.status).toEqual(200);
  });
});
