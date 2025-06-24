
import { FastifyReply, FastifyRequest } from 'fastify';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import { verifyToken } from '../../utils/verifyToken';
import config from '../config';
import { prisma } from '../helpers/prisma';
import AppError from './appError';

declare module 'fastify' {
  interface FastifyRequest {
    user?: any;
  }
}

const auth = (...roles: string[]) => {
  return async (req: FastifyRequest, reply: FastifyReply, done: any) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
      }

      const verifyUserToken = verifyToken(
        token,
        config.jwt.access_secret as Secret,
      );

      // Check user is exist
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          id: verifyUserToken.id,
        },
      });

      if (!user) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
      }

      req.user = verifyUserToken;
      if (roles.length && !roles.includes(verifyUserToken.role)) {
        throw new AppError(httpStatus.FORBIDDEN, 'Forbidden!');
      }
      done();
    } catch (error) {
      done(error);
    }
  };
};

export default auth;