import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { FacultiesServices } from "./faculties.service";

const getAllFaculties = catchAsync(async (req, res) => {
  
    const result = await FacultiesServices.getAllFacultiessFromDB(req.query);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faculty are retrieved succesfully',
      data: result,
    });
  });
const getSingleFaculties = catchAsync(async (req, res) => {
  
    const {facultyId}= req.params
    const result = await FacultiesServices.getSingleFacultiesFromDB(facultyId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faculty are retrieved succesfully',
      data: result,
    });
  });
const updateAFaculties = catchAsync(async (req, res) => {
  const {facultyId} = req.params;
  const {faculty} = req.body;
    const result = await FacultiesServices.updateAFacultiesInDB(facultyId,faculty);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faculty are updated succesfully',
      data: result,
    });
  });
const deleteFaculties = catchAsync(async (req, res) => {
  
    const result = await FacultiesServices.deleteFacultiesFromDB(req.query);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faculty are retrieved succesfully',
      data: result,
    });
  });


  export const FacultiesControllers = {
    getAllFaculties,
    getSingleFaculties,
    updateAFaculties,
    deleteFaculties,
    
  };
  