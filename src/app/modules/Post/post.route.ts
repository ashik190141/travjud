import { PostController } from "./post.controller";

export const postRoutes = async (fastify:any, opts:any) => {
  fastify.post("/", PostController.createPosts);
};