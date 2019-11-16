import controller from "./controller";

export default [
  {
    path: "/user/:email",
    method: "GET",
    handler: controller
  }
];
