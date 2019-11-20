import addUserRoutes from "./user/add-user/routes";
import getAllUserRoutes from "./user/get-all-user/routes";
import getUserRoutes from "./user/get-user/routes";
import updateUserRoutes from "./user/update-user/routes";
import deleteUserRoutes from "./user/delete-user/routes";

export default [
  ...addUserRoutes,
  ...getAllUserRoutes,
  ...getUserRoutes,
  ...updateUserRoutes,
  ...deleteUserRoutes
];
