import config from "../../config";
import { TStudent } from "../student/student.interface";
import { NewUser, Tuser } from "./user.interface";
import { UserModel } from "./user.model";
import { Student } from './../student/student.model';


const createStudentIntoDB = async (password: string, studentData: TStudent) => {
//create a user object
  let userData: Partial<Tuser> = {}


  //if password not given use default password
  userData.password = password || (config.defalt_password as string);
 

  //set student role
  
  userData.role = 'student';
  // manual genarated id
  userData.id = '2030100001'



  //create user
    const newUser = await UserModel.create(userData);

  //create a student
  if(Object.keys(newUser).length)  {
    //set id , _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; // reference to user

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
    
  };

  

  export const UserServices = {
    createStudentIntoDB
  }