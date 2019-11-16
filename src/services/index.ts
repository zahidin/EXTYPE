import addUserRoutes from "./add-user/routes";
import getAllUserRoutes from "./get-all-user/routes";
import getUserRoutes from "./get-user/routes";
import updateUserRoutes from "./update-user/routes";
import deleteUserRoutes from "./delete-user/routes";

export default [
  ...addUserRoutes,
  ...getAllUserRoutes,
  ...getUserRoutes,
  ...updateUserRoutes,
  ...deleteUserRoutes
];
