import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AdminServices } from "./admin.service";


const getAllAdmin = catchAsync(async (req, res) => {
  
    const result = await AdminServices.getAllAdminsFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'admin are retrieved succesfully',
      data: result,
    });
  });
const getSingleAdmin = catchAsync(async (req, res) => {
  
    const {adminId}= req.params
    const result = await AdminServices.getSingleAdminFromDB(adminId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'admin is retrieved succesfully',
      data: result,
    });
  });
const updateAAdmin = catchAsync(async (req, res) => {
  const {adminId} = req.params;
  const {admin} = req.body;
    const result = await AdminServices.updateAAdminInDB(adminId,admin);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'admin are updated succesfully',
      data: result,
    });
  });
const deleteAdmin = catchAsync(async (req, res) => {
    const {adminId} = req.params;
    const result = await AdminServices.deleteAdminFromDB(adminId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'admin is deleted succesfully',
      data: result,
    });
  });


  export const AdminControllers = {
    getAllAdmin,
    getSingleAdmin,
    updateAAdmin,
    deleteAdmin,
    
  };
  