
import { academicSemesterCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from './academicSemester.model';


const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {

//semester name --> semester code

if(academicSemesterCodeMapper[payload.name] !== payload.code){
  throw new Error('Invalid semester code')
}

    const result = await AcademicSemester.create(payload);
    return result;
 
    
  };

  
//get all DB
 const getAllAcademicSemesterFromDB = async()=>{

  const result = await AcademicSemester.find();
  return result;
 }

//  get one DB 
const getSingleAcademicSemesterFromDB = async(semesterId: string)=>{
  const result = await AcademicSemester.findById(semesterId)
  return result ;
}


// Update Data 
const updateAcademicSemesterInDB = async(semesterId: string ,updateData: Partial<TAcademicSemester>)=>{
  if(
    updateData.name &&
    updateData.code &&
    academicSemesterCodeMapper[updateData.name] !== updateData.code){
    throw new Error('Invalid semester code')
  }
  
  
  const result = await AcademicSemester.findOneAndUpdate(
    {_id: semesterId},
    {$set: updateData},
    {new:true}
  );

  
  return result;
}


  export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemesterFromDB,
    getSingleAcademicSemesterFromDB,
    updateAcademicSemesterInDB
  }