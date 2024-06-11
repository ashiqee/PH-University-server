import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TSemesterRegistration } from "./semesterRegistration.interface";
import { SemesterRegistration } from './semesterRegistration.model';



const createSemesterRegistrationInDB = async (payload: TSemesterRegistration)=>{
   
    const academicSemester = payload?.academicSemester;

    const isAcademicSemester = await AcademicSemester.findById(academicSemester);

    if(!isAcademicSemester){
        throw new AppError(httpStatus.NOT_FOUND,"This Academic semester not found")
    }

//check if the semester is already registerd
    const isAcademicRegisterSemester = await SemesterRegistration.findById(academicSemester);
    
        if(!isAcademicRegisterSemester){
            throw new AppError(httpStatus.NOT_FOUND,"This Semester already registered")
        }
   
   
    const result = SemesterRegistration.create(payload)
    return result;
};

const getAllSemesterRegistrationFromDB = async ()=>{

const result = await SemesterRegistration.find()
return result;
}


const getSingleSemesterRegistrationFromDB = async(id: string)=>{
    
    const  result = await SemesterRegistration.findById(id)
    return result;

}


const updateSemesterRegistrationInDB = async(id: string,updateData: Partial<TSemesterRegistration> )=>{
    

    const result = await SemesterRegistration.findOneAndUpdate(
        {_id:id},
        {$set:updateData},
        {new: true})

        return result;
}


export const  SemesterRegistrationSevices = {
    createSemesterRegistrationInDB,
    getAllSemesterRegistrationFromDB,
    getSingleSemesterRegistrationFromDB,
    updateSemesterRegistrationInDB
}