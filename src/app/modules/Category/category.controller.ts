import { FastifyReply, FastifyRequest } from "fastify"
import catchAsync from "../../helpers/catchAsync"
import sendResponse from "../../helpers/sendResponse"
import httpStatus from "http-status"

const createCategory = catchAsync(async (request:FastifyRequest, reply:FastifyReply) => {
//   const result = await BookingsServices.createBookingsIntoDB(req.body, user)
  sendResponse(reply, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Category created successfully',
    data: 'result',
  })
})

export const CategoryController = {
  createCategory,
}