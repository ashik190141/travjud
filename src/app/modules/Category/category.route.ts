import { CategoryController } from "./category.controller";

export const CategoryRoutes = async (fastify:any, opts:any) => {
  fastify.post("/", CategoryController.createCategory);
};