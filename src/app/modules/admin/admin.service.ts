import { TAdmin } from "./admin.interface"
import { Admin } from "./admin.model"






const getAllAdminsFromDB = async()=>{

    const result = await Admin.find()
    
    return result
    
}
const getSingleAdminFromDB = async(id: string)=>{
    const result = await Admin.findOne({id})
    return result;

}
const updateAAdminInDB =async(id:string,payload: Partial<TAdmin>)=>{
 const {name,...remainingFacultyData} = payload;
 const modifiedUpdatedData: Record<string,unknown>={
    ...remainingFacultyData
 };

 if(name && Object.keys(name).length){
    for (const [key,value] of Object.entries(name)){
        modifiedUpdatedData[`name.${key}`] =value;
    }
 }
 const result = await Admin.findOneAndUpdate({id},
    modifiedUpdatedData,
    {new: true,
        runValidators:true,
    })

 return result;

}
const deleteAdminFromDB =async(id:string)=>{


    const result = await Admin.findOneAndUpdate({id},{isDeleted:true},{new:true})

    return result;

}






export const AdminServices = {
    deleteAdminFromDB,
    getAllAdminsFromDB,
    getSingleAdminFromDB,
    updateAAdminInDB,
   
  };
  