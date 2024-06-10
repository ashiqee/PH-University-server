import { TSemesterRegistration } from "./semesterRegistration.interface";
import { SemesterRegistration } from './semesterRegistration.model';



const createSemesterRegistrationInDB = async (payload: TSemesterRegistration)=>{
    const result = SemesterRegistration.create(payload)
    return result;
};

const getAllSemesterRegistrationFromDB = async ()=>{

const result = await SemesterRegistration.find()
return result;
}


const getSingleSemesterRegistrationFromDB = async(id: string)=>{
    
    const  result = await SemesterRegistration.findById(id)
    return result;

}


const updateSemesterRegistrationInDB = async(id: string,updateData: Partial<TSemesterRegistration> )=>{
    

    const result = await SemesterRegistration.findOneAndUpdate(
        {_id:id},
        {$set:updateData},
        {new: true})

        return result;
}


export const  SemesterRegistrationSevices = {
    createSemesterRegistrationInDB,
    getAllSemesterRegistrationFromDB,
    getSingleSemesterRegistrationFromDB,
    updateSemesterRegistrationInDB
}