
import { Faculties } from "./faculties.model"




const getAllFacultiessFromDB = async()=>{

    const result = await Faculties.find()
    
    return result
    
}
const getSingleFacultiesFromDB = async(id: string)=>{
    const result = await Faculties.findOne({id})
    return result;

}
const updateAFacultiesInDB =()=>{

}
const deleteFacultiesFromDB =()=>{

}






export const FacultiesServices = {
    deleteFacultiesFromDB,
    getAllFacultiessFromDB,
    getSingleFacultiesFromDB,
    updateAFacultiesInDB,
   
  };
  