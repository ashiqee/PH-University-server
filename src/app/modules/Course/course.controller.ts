import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CourseServices } from "./course.service";


const createCourse = catchAsync(async (req, res) => {
  
    const result = await CourseServices.createCourseIntoDB(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'course created succesfully',
      data: result,
    });
  });
const getAllCourse = catchAsync(async (req, res) => {
  
    const result = await CourseServices.getAllCourseFromDB(req.query);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'course are retrieved succesfully',
      data: result,
    });
  });
const getSingleCourse = catchAsync(async (req, res) => {
  
    const {id}= req.params
    const result = await CourseServices.getSingleCourseFromDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'course is retrieved succesfully',
      data: result,
    });
  });
const updateACourse = catchAsync(async (req, res) => {
  const {id} = req.params;
  const course = req.body;

    const result = await CourseServices.updateCourseIntoDB(id,course);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'course are updated succesfully',
      data: result,
    });
  });
const deleteCourse = catchAsync(async (req, res) => {
    const {id} = req.params;
    const result = await CourseServices.deleteSingleCourseFromDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'course is deleted succesfully',
      data: result,
    });
  });
const assignFacultiesWithCourse = catchAsync(async (req, res) => {
    const {courseId} = req.params;
    const {faculties}=req.body;
    const result = await CourseServices.assignFacultiesWithCourseInToDB(courseId,faculties);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faculties Added succesfully',
      data: result,
    });
  });


  export const CourseControllers = {
    createCourse,
    getAllCourse,
    getSingleCourse,
    updateACourse,
    deleteCourse,
    assignFacultiesWithCourse,
    
  };
  