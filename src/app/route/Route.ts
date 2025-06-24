import app from "../../app";
import { CategoryRoutes } from "../modules/Category/category.route";
import { postRoutes } from "../modules/Post/post.route";
import { userRoutes } from "../modules/User/user.route";


const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/post",
    route: postRoutes,
  },
  {
    path: "/category",
    route: CategoryRoutes,
  }
];

moduleRoutes.forEach((route) => {
  app.register(route.route, { prefix: route.path });
});

export default moduleRoutes;
