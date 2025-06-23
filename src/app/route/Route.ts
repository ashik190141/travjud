import app from "../../app";
import { userRoutes } from "./modules/User/user.route";


const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes,
  }
];

moduleRoutes.forEach((route) => {
  app.register(route.route, { prefix: route.path });
});

export default moduleRoutes;
