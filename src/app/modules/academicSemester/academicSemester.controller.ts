import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse"

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


const getAllAcademicSemester = catchAsync( async(req,res)=>{
    const result = await AcademicSemesterServices.getAllAcademicSemesterFromDB()

    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message:"Get All Academic semeter info",
        data:result,
    })
})


const getSingleAcademicSemester = catchAsync(
    async(req,res)=>{
        const {semesterId} = req.params
        const result = await AcademicSemesterServices.getSingleAcademicSemesterFromDB(semesterId);

        sendResponse(res,{
            statusCode:httpStatus.OK,
            success:true,
            message: "Get Single Academic semester info",
            data:result
        })
    }
)


const updateAcademicSemester = catchAsync(
    async(req,res)=>{
        const {semesterId}= req.params;
        const updateData = req.body;
        const result = await AcademicSemesterServices.updateAcademicSemesterInDB(semesterId,updateData);

        sendResponse(res,{
            statusCode:httpStatus.OK,
            success:true,
            message:"Update Academic semester",
            data:result
        })
    }
)

export const AcademicSemesterControllers = {
    createAcademicSemester,
    getAllAcademicSemester,
    getSingleAcademicSemester,
    updateAcademicSemester
}