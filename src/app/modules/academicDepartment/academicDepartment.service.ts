import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";



const createAcademicDepartmentInDB = async (payload: TAcademicDepartment)=>{
    
    const result = AcademicDepartment.create(payload)
    return result;
};

const getAllAcademicDepartmentFromDB = async ()=>{

const result = AcademicDepartment.find().populate('academicFaculty')
return result;
}


const getSingleAcademicDepartmentFromDB = async(id: string)=>{
    
    const  result = AcademicDepartment.findById(id).populate('academicFaculty')
    return result;

}


const updateAcademicDepartmentInDB = async(id: string,updateData: Partial<TAcademicDepartment> )=>{
    

    const result = AcademicDepartment.findOneAndUpdate(
        {_id:id},
        {$set:updateData},
        {new: true})

        return result;
}


export const  AcademicDepartmentSevices = {
    createAcademicDepartmentInDB,
    getAllAcademicDepartmentFromDB,
    getSingleAcademicDepartmentFromDB,
    updateAcademicDepartmentInDB
}