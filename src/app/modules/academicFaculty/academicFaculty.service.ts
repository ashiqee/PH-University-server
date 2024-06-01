import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.model";


const createAcademicFacultyInDB = async (payload: TAcademicFaculty)=>{
    const result = AcademicFaculty.create(payload)
    return result;
};

const getAllAcademicFacultyFromDB = async ()=>{

const result = AcademicFaculty.find()
return result;
}


const getSingleAcademicFacultyFromDB = async(id: string)=>{
    
    const  result = AcademicFaculty.findById(id)
    return result;

}


const updateAcademicFacultyInDB = async(id: string,updateData: Partial<TAcademicFaculty> )=>{
    

    const result = AcademicFaculty.findOneAndUpdate(
        {_id:id},
        {$set:updateData},
        {new: true})

        return result;
}


export const  AcademicFacultySevices = {
    createAcademicFacultyInDB,
    getAllAcademicFacultyFromDB,
    getSingleAcademicFacultyFromDB,
    updateAcademicFacultyInDB
}