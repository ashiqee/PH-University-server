import { UserValidation } from './user.validation';
import { UserServices } from './user.service';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import sendResponse from './../../utils/sendResponse';
import httpStatus from 'http-status';

const createStudent:RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { password, student: studentData } = req.body;
    // const parsedUser = UserValidation.parse(studentData)

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};
