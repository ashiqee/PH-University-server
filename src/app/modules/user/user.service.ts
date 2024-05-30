import config from "../../config";
import { TStudent } from "../student/student.interface";
import {  Tuser } from "./user.interface";
import { UserModel } from "./user.model";
import { Student } from './../student/student.model';

import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { genarateStudentId } from "./user.utils";


const createStudentIntoDB = async (password: string, payload: TStudent) => {
//create a user object
  const userData: Partial<Tuser> = {}


  //if password not given use default password
  userData.password = password || (config.defalt_password as string);
 

  //set student role
  
  userData.role = 'student';

  // find academic semester info 
  const admissionSemester = await AcademicSemester.findById(payload.admissionSemester)
  
 //set generated ID
 userData.id = await genarateStudentId(admissionSemester)



  //create user
    const newUser = await UserModel.create(userData);

  //create a student
  if(Object.keys(newUser).length)  {
    //set id , _id as user
    payload.id = newUser.id;
    payload.user = newUser._id; // reference to user

    const newStudent = await Student.create(payload);
    return newStudent;
  }
    
  };

  

  export const UserServices = {
    createStudentIntoDB
  }