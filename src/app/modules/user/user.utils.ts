



import { TAcademicSemester } from "../academicSemester/academicSemester.interface";




  // manual genarated id
  // userData.id = '2030100001'
  //auto genarated id // year semestercode 4digit number
  export const genarateStudentId = (payload: TAcademicSemester)=>{
    
    //first time 000
    const currentId =(0).toString();
    let incrementId = (Number(currentId)+1).toString().padStart(4,'0');

    incrementId =`${payload.year}${payload.code}${incrementId}`

    return incrementId;
  } 