import request from "supertest";
import router from "./utils/initialize-express";
import promiseRequest from "request-promise";

jest.mock("request-promise");
(promiseRequest as any).mockImplementation(() => '{"features": []}');

describe("user", () => {
  test("a test data user", async () => {
    const response = await request(router).get("/api/v1/users");
    expect(response.status).toEqual(200);
  });
});
