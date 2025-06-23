import Fastify, { FastifyReply } from "fastify";
import cors from "@fastify/cors";
import moduleRoutes from "./app/route/Route";

const app = Fastify({logger:true}) as any;

app.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

app.get("/", function (request:any, reply:FastifyReply) {
  reply.send({ error: false, ready: request.server.magicKey !== null, DataView: 'fastify server is running' });
});

app.route(moduleRoutes);

export default app;
