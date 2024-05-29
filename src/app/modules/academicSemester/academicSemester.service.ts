import config from "../../config";


import { Student } from './../student/student.model';
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from './academicSemester.model';


const createAcademicSemesterIntoDB = async (academicSemesterData: TAcademicSemester) => {



    const result = await AcademicSemester.create(academicSemesterData);
    return result;
 
    
  };

  

  export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB
  }