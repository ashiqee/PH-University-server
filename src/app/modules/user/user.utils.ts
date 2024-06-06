



import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { UserModel } from "./user.model";

const findLastStudentId = async()=>{
  const lastStudent = await UserModel.findOne({
    role:"student",
  },
  {
    id:1,
    _id:0,
  },
)
.sort(
  {
    createdAt: -1,
  })
.lean()

return lastStudent?.id ? lastStudent.id : undefined
}


  // manual genarated id
  // userData.id = '2030100001'
  //auto genarated id // year semestercode 4digit number
  export const genarateStudentId = async (payload: TAcademicSemester)=>{
   
    
    
    let currentId = (0).toString();
    //first time 000
    const lastStudentId  =await findLastStudentId()

    

    const lastStudentSemesterCode = lastStudentId?.substring(4,6);
    const lastStudentYear = lastStudentId?.substring(0,4);
    const currentSemesterCode = payload.code;
    const currentYear = payload.year;
    if(lastStudentId &&
      lastStudentSemesterCode === currentSemesterCode && lastStudentYear === currentYear
    ){
      currentId = lastStudentId.substring(6)
    }
    
    let incrementId = (Number(currentId)+1).toString().padStart(4,'0');

    incrementId =`${payload.year}${payload.code}${incrementId}`
    
    

    return incrementId;
  } 


  //faculties 

  const findLastFacultiesId = async ()=>{
    const lastFaculties = await UserModel.findOne({
      role:"faculty",
    },
  {
    id:1,
    _id:0,
  },)
  .sort({
    createdAt: -1,
  })
  .lean()

  return lastFaculties?.id ? lastFaculties.id : undefined
  }

  export const genaratedFacultiesId = async ()=>{

    let currentId = (0).toString();

    const lastFacultiesId = await findLastFacultiesId()
 if(lastFacultiesId){
  currentId = lastFacultiesId.substring(2)
 }
 let incrementId = (Number(currentId)+1).toString().padStart(4,'0')

 incrementId =`F-${incrementId}`;

 return incrementId;
  }