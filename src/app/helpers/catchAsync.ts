import {FastifyReply, FastifyRequest } from 'fastify'

const catchAsync = (fn: (req: FastifyRequest, reply: FastifyReply ) => Promise<any>) => {
  return async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      await fn(req, reply);
    } catch (err) {
      reply.send(err);
    }
  };
};

export default catchAsync