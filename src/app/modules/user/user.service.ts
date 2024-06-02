import config from "../../config";
import { TStudent } from "../student/student.interface";
import {  Tuser } from "./user.interface";
import { UserModel } from "./user.model";
import { Student } from './../student/student.model';

import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { genarateStudentId } from "./user.utils";
import AppError from './../../errors/AppError';
import httpStatus  from 'http-status';
import mongoose from "mongoose";


const createStudentIntoDB = async (password: string, payload: TStudent) => {


  const isStudentExits = await Student.findOne({ email: payload.email });
  if (isStudentExits) {
    throw new AppError(httpStatus.NOT_FOUND ,'Student already exists');
  }

//create a user object
  const userData: Partial<Tuser> = {}


  //if password not given use default password
  userData.password = password || (config.defalt_password as string);
 

  //set student role
  
  userData.role = 'student';

  // find academic semester info 
  const admissionSemester = await AcademicSemester.findById(payload.admissionSemester)



  const  session = await mongoose.startSession()

  try{
    session.startTransaction()
 //set generated ID
 userData.id = await genarateStudentId(admissionSemester)



  //create user (transaction -1)
    const newUser = await UserModel.create([userData],{session});

//create a student
    if(!newUser.length){
       throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user")
    }

  

    //set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; // reference to user


    //create a student (transcation-2)
    const newStudent = await Student.create([payload],[session]);

    if(!newStudent)throw new AppError(httpStatus.BAD_REQUEST,'Failed to create student');

    await session.commitTransaction()
    await session.endSession()

    return newStudent;
  
    
  }catch(err){
 await session.abortTransaction()
 await session.endSession()
 throw new AppError(httpStatus.BAD_REQUEST,"Failed to create user")
  }
}

  

  export const UserServices = {
    createStudentIntoDB
  }