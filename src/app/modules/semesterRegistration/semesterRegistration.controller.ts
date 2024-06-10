import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

import { SemesterRegistrationSevices } from "./semesterRegistration.service";


const createSemesterRegistration = catchAsync(
    async(req,res)=>{
        const result = await SemesterRegistrationSevices.createSemesterRegistrationInDB(req.body);

        sendResponse(res,{
            statusCode: httpStatus.OK,
            success:true,
            message: "Semester Registration created successfully",
            data: result,
        })
    }
)
const getAllSemesterRegistration = catchAsync(
    async(req,res)=>{
        const result = await SemesterRegistrationSevices.getAllSemesterRegistrationFromDB();

        sendResponse(res,{
            statusCode: httpStatus.OK,
            success:true,
            message: "Get All Semester Registration retrieved successfully",
            data: result,
        })
    }
)
const getSingleSemesterRegistration = catchAsync(
    async(req,res)=>{
        const {id} =req.params
        const result = await SemesterRegistrationSevices.getSingleSemesterRegistrationFromDB(id);

        sendResponse(res,{
            statusCode: httpStatus.OK,
            success:true,
            message: "Get Single Semester Registration retrieved successfully",
            data: result,
        })
    }
)
const updateASemesterRegistration = catchAsync(
    async(req,res)=>{
        const {id}= req.params;
        const updateData= req.body;
        const result = await SemesterRegistrationSevices.updateSemesterRegistrationInDB(id,updateData);

        sendResponse(res,{
            statusCode: httpStatus.OK,
            success:true,
            message: "Semester Registration updated successfully",
            data: result,
        })
    }
)


export const SemesterRegistrationControllers = {
    createSemesterRegistration,
    getAllSemesterRegistration,
    getSingleSemesterRegistration,
    updateASemesterRegistration

}