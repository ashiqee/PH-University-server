import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicFacultySevices } from "./academicFaculty.service";


const createAcademicFaculty = catchAsync(
    async(req,res)=>{
        const result = await AcademicFacultySevices.createAcademicFacultyInDB(req.body);

        sendResponse(res,{
            statusCode: httpStatus.OK,
            success:true,
            message: "Academic Faculty created successfully",
            data: result,
        })
    }
)
const getAllAcademicFaculty = catchAsync(
    async(req,res)=>{
        const result = await AcademicFacultySevices.getAllAcademicFacultyFromDB();

        sendResponse(res,{
            statusCode: httpStatus.OK,
            success:true,
            message: "Get All Academic Faculty retrieved successfully",
            data: result,
        })
    }
)
const getSingleAcademicFaculty = catchAsync(
    async(req,res)=>{
        const {id} =req.params
        const result = await AcademicFacultySevices.getSingleAcademicFacultyFromDB(id);

        sendResponse(res,{
            statusCode: httpStatus.OK,
            success:true,
            message: "Get Single Academic Faculty retrieved successfully",
            data: result,
        })
    }
)
const updateAAcademicFaculty = catchAsync(
    async(req,res)=>{
        const {id}= req.params;
        const updateData= req.body;
        const result = await AcademicFacultySevices.updateAcademicFacultyInDB(id,updateData);

        sendResponse(res,{
            statusCode: httpStatus.OK,
            success:true,
            message: "Academic Faculty updated successfully",
            data: result,
        })
    }
)


export const AcademicFacultyControllers = {
    createAcademicFaculty,
    getAllAcademicFaculty,
    getSingleAcademicFaculty,
    updateAAcademicFaculty

}