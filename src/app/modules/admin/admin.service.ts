import mongoose from "mongoose"
import { TAdmin } from "./admin.interface"
import { Admin } from "./admin.model"
import AppError from "../../errors/AppError"
import httpStatus from "http-status"
import { UserModel } from "../user/user.model"






const getAllAdminsFromDB = async()=>{

    const result = await Admin.find()
    
    return result
    
}
const getSingleAdminFromDB = async(id: string)=>{
    const result = await Admin.findOne({id})
    return result;

}
const updateAAdminInDB =async(id:string,payload: Partial<TAdmin>)=>{
 const {name,...remainingFacultyData} = payload;
 const modifiedUpdatedData: Record<string,unknown>={
    ...remainingFacultyData
 };

 if(name && Object.keys(name).length){
    for (const [key,value] of Object.entries(name)){
        modifiedUpdatedData[`name.${key}`] =value;
    }
 }
 const result = await Admin.findOneAndUpdate({id},
    modifiedUpdatedData,
    {new: true,
        runValidators:true,
    })

 return result;

}
const deleteAdminFromDB =async(id:string)=>{

const session = await mongoose.startSession()
try{
    session.startTransaction();

    const deletedAdmin = await Admin.findOneAndUpdate(
        {id},
        {isDeleted:true},
        {new:true, session},
    );
    if(!deletedAdmin){
        throw new AppError(httpStatus.BAD_REQUEST,"failed to deleted admin")

    }

    const userId = deletedAdmin.user;
    const deletedUser = await UserModel.findOneAndUpdate(
        { userId },
        { isDeleted: true },
        { new: true, session },
      );
  
      if (!deletedUser)
        throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete user');
  
      await session.commitTransaction();
      await session.endSession();
  
      return deletedAdmin;
    } catch (err) {
      await session.abortTransaction();
      await session.endSession();
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete user');
    }

  

}






export const AdminServices = {
    deleteAdminFromDB,
    getAllAdminsFromDB,
    getSingleAdminFromDB,
    updateAAdminInDB,
   
  };
  