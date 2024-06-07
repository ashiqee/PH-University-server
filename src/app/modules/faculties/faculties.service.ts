
import mongoose from "mongoose"
import { TFaculties } from "./faculties.interface"
import { Faculties } from "./faculties.model"
import AppError from "../../errors/AppError"
import httpStatus from "http-status"
import { UserModel } from "../user/user.model"
import QueryBuilder from "../../builder/QueryBuilder"
import { FacultySearchableFields } from "./faculties.constant"




const getAllFacultiessFromDB = async(query: Record<string,unknown>)=>{
const facultiesQuery = new QueryBuilder(
    Faculties.find()
    .populate('academicDepartment academicFaculty'),
    query,
).search(FacultySearchableFields)
.filter()
.sort()
.paginate()
.fields()
const result = await facultiesQuery.modelQuery;
// const meta = await facultiesQuery.countTotal();
return {
//   meta,
  result,
};
    
}
const getSingleFacultiesFromDB = async(id: string)=>{
    const result = await Faculties.findById(id)
    return result;

}
const updateAFacultiesInDB =async(id:string,payload: Partial<TFaculties>)=>{
 const {name,...remainingFacultyData} = payload;
 const modifiedUpdatedData: Record<string,unknown>={
    ...remainingFacultyData
 };

 if(name && Object.keys(name).length){
    for (const [key,value] of Object.entries(name)){
        modifiedUpdatedData[`name.${key}`] =value;
    }
 }
 const result = await Faculties.findByIdAndUpdate(
    id,
    modifiedUpdatedData,
    {new: true,
        runValidators:true,
    })

 return result;

}
const deleteFacultiesFromDB =async(id:string)=>{

    const session = await mongoose.startSession();

    try{
        session.startTransaction();
        const deletedFaculty = await Faculties.findByIdAndUpdate(id,
            {isDeleted:true},
            {new: true, session},
        );

        if(!deletedFaculty){
            throw new AppError(httpStatus.BAD_REQUEST,'Failed to delete faculty')

        }

        //get user id
        const userId = deletedFaculty.user;
        const deletedUser = await UserModel.findByIdAndUpdate(
            userId,
            {isDeleted: true},
            {new:true,session},
        )
        if(!deletedUser){
            throw new AppError(httpStatus.BAD_REQUEST,'Failed to delete user')

        }

        await session.commitTransaction()
        await session.endSession();

        return deletedFaculty;
    }catch(err){
        await session.abortTransaction()
        await session.endSession()
        throw new AppError(httpStatus.BAD_REQUEST,`${err}failed deleted faculty`)
    }


   

}






export const FacultiesServices = {
    deleteFacultiesFromDB,
    getAllFacultiessFromDB,
    getSingleFacultiesFromDB,
    updateAFacultiesInDB,
   
  };
  