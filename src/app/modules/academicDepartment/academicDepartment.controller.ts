import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicDepartmentSevices } from "./academicDepartment.service";



const createAcademicDepartment = catchAsync(
    async(req,res)=>{
        const result = await AcademicDepartmentSevices.createAcademicDepartmentInDB(req.body);

        sendResponse(res,{
            statusCode: httpStatus.OK,
            success:true,
            message: "Academic Department created successfully",
            data: result,
        })
    }
)
const getAllAcademicDepartment = catchAsync(
    async(req,res)=>{
        const result = await AcademicDepartmentSevices.getAllAcademicDepartmentFromDB();

        sendResponse(res,{
            statusCode: httpStatus.OK,
            success:true,
            message: "Get All Academic Department retrieved successfully",
            data: result,
        })
    }
)
const getSingleAcademicDepartment = catchAsync(
    async(req,res)=>{
        const {id} =req.params
        const result = await AcademicDepartmentSevices.getSingleAcademicDepartmentFromDB(id);

        sendResponse(res,{
            statusCode: httpStatus.OK,
            success:true,
            message: "Get Single Academic Department retrieved successfully",
            data: result,
        })
    }
)
const updateAAcademicDepartment = catchAsync(
    async(req,res)=>{
        const {id}= req.params;
        const updateData= req.body;
        const result = await AcademicDepartmentSevices.updateAcademicDepartmentInDB(id,updateData);

        sendResponse(res,{
            statusCode: httpStatus.OK,
            success:true,
            message: "Academic Department updated successfully",
            data: result,
        })
    }
)


export const AcademicDepartmentControllers = {
    createAcademicDepartment,
    getAllAcademicDepartment,
    getSingleAcademicDepartment,
    updateAAcademicDepartment

}