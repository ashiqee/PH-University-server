import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse"
import { AcademicSemester } from "./academicSemester.model"
import { AcademicSemesterServices } from './academicSemester.service';
import  httpStatus  from 'http-status';



const createAcademicSemester = catchAsync(
    async (req,res) => {

        const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(req.body)
    
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'AcademicSemester is created succesfully',
            data: result,
        })
    
    }
    
)

export const AcademicSemesterControllers = {
    createAcademicSemester
}