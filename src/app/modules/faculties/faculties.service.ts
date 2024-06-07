
import { Faculties } from "./faculties.model"




const getAllFacultiessFromDB = async()=>{

    const result = await Faculties.find()
    console.log(result);
    return result
    
}
const getSingleFacultiesFromDB =()=>{

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
  