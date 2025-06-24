import { UserController } from "./user.controller";


export const userRoutes = async (fastify:any, opts:any) => {
  fastify.get("/", UserController.createUser);

//   fastify.get("/:id", async (request, reply) => {
//     const { id } = request.params;
//     return { userId: id };
//   });
};
