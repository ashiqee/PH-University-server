import { UserServices } from './user.service';
import sendResponse from './../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;
  // const parsedUser = UserValidation.parse(studentData)

  const result = await UserServices.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created succesfully',
    data: result,
  });
});
const createFaculties = catchAsync(async (req, res) => {
  const { password, faculty: facultyData } = req.body;
  // const parsedUser = UserValidation.parse(facultyData)

  const result = await UserServices.createFacultiesInToDB(password, facultyData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculties is created succesfully',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
  createFaculties
};
