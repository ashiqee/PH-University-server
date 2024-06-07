
import { TFaculties } from "./faculties.interface"
import { Faculties } from "./faculties.model"




const getAllFacultiessFromDB = async()=>{

    const result = await Faculties.find()
    
    return result
    
}
const getSingleFacultiesFromDB = async(id: string)=>{
    const result = await Faculties.findOne({id})
    return result;

}
const updateAFacultiesInDB =async(id:string,payload: Partial<TFaculties>)=>{
 const {name,...remainingFacultyData} = payload;
 const modifiedUpdatedData: Record<string,unknown>={
    ...remainingFacultyData
 };

 if(name && Object.keys(name).length){
    for (const [key,value] of Object.entries(name)){
        modifiedUpdatedData[`name.${key}`] =value;
    }
 }
 const result = await Faculties.findOneAndUpdate({id},
    modifiedUpdatedData,
    {new: true,
        runValidators:true,
    })

 return result;

}
const deleteFacultiesFromDB =async(id:string)=>{


    const result = await Faculties.findOneAndUpdate({id},{isDeleted:true},{new:true})

    return result;

}






export const FacultiesServices = {
    deleteFacultiesFromDB,
    getAllFacultiessFromDB,
    getSingleFacultiesFromDB,
    updateAFacultiesInDB,
   
  };
  