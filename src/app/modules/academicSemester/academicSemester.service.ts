import config from "../../config";


import { Student } from './../student/student.model';
import { TAcademicSemester } from "./academicSemester.interface";


const createAcademicSemesterIntoDB = async (academicSemesterData: TAcademicSemester) => {



    const result = await Student.create(academicSemesterData);
    return result;
 
    
  };

  

  export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB
  }