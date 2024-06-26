
// import mongoose from 'mongoose';
// import { Student } from './student.model';
// import AppError from '../../errors/AppError';
// import httpStatus from 'http-status';
// import { UserModel } from '../user/user.model';
// import { TStudent } from './student.interface';




// const getAllStudentsFromDB = async (query: Record<string,unknown>) => {

// const queryObj = {...query}
//   // {email: { $regex : query.searchTerm, $option:i}
// const studentSearchableField =  ['email','name.firstName','presentAdress']
//   let searchTerm = '';
//   if(query?.searchTerm){
//     searchTerm = query?.searchTerm as string;
//   }




// const searchQuery = Student.find({
//     $or:studentSearchableField.map((field)=>({
//       [field]:{$regex: searchTerm, $options: 'i'}
//     }))
//   })


//   // filtering 

//   const  excludeFields = ['searchTerm','sort','limit','page','fields']
//   excludeFields.forEach((el)=> delete queryObj[el]);

//   console.log({query},{queryObj});
  



//   const filterQuery = searchQuery.find(queryObj).populate('admissionSemester').populate(
//     {
//       path:'academicDepartment',
//       populate:{
//       path:'academicFaculty'
//       }
//   });

//   let sort = '-createdAt';
//   if(query.sort){
//     sort = query.sort as string;
//   }

 
   
//   const sortQuery =  filterQuery.sort(sort);
// let page =1;
//   let limit = 1;
// let skip =0;

// if(query.limit){
//   limit = Number(query.limit)
// }
//   if(query.page){
//     page =Number(query.page)
//     skip = (page-1)*limit
//   }

//   const paginateQuery = sortQuery.skip(skip)
  

//   const limitQeury =  paginateQuery.limit(limit)

// //field query
// let fields = '-__v';

// if(query.fields){
//   fields = (query.fields as string).split(',').join(' ');

  
// }

// const fieldQuery = await limitQeury.select(fields)

//   return fieldQuery;

// };

// const getSingleStudentFromDB = async (id: string) => {
//   const result = await Student.findOne({ id });
//   return result;
// };

// const deleteStudentFromDB = async(id: string) => {
//   const isUserExists = await UserModel.findOne({ id: id });
  

//   if (!isUserExists) {
//       throw new AppError(httpStatus.BAD_REQUEST, "User does not exist");
//   }

//   const session = await mongoose.startSession()
//   try{
 
//     session.startTransaction()

  

//     const deletedStudent = await Student.findOneAndUpdate(
//       { id },{isDeleted: true},
//       {new: true, session},
//     );

//     if(!deletedStudent) throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete student');

//     const deletedUser = await UserModel.findOneAndUpdate(
//       {id},
//       {isDeleted: true},
//       {new: true, session},
//     )

//     if(!deletedUser)throw new AppError(httpStatus.BAD_REQUEST,'Failed to delete user')

// await session.commitTransaction()
// await session.endSession();

//   return deletedStudent;

//   }catch(err){
//     await session.abortTransaction()
//     await session.endSession()
//     throw new AppError(httpStatus.BAD_REQUEST,"Failed to delete user")
//   }
  
// }


// const updateAStudentInDB = async(id: string,payload: Partial<TStudent> )=>{

 
//   const{name,guardian,localGuardian, ...remainingStudentData} = payload;

//   const modifiedUpdatedData : Record<string,unknown> = {
//     ...remainingStudentData,
//   }

//   if(name && Object.keys(name).length){
//     for(const [key,value] of Object.entries(name)){
//       modifiedUpdatedData[`name.${key}`]=value;
//     }
//   }

//   if(guardian && Object.keys(guardian).length){
//     for(const [key,value] of Object.entries(guardian)){
//       modifiedUpdatedData[`guardian.${key}`]=value;
//     }
//   }
  
//   if(localGuardian && Object.keys(localGuardian).length){
//     for(const [key,value] of Object.entries(localGuardian)){
//       modifiedUpdatedData[`localGuardian.${key}`]=value;
//     }
//   }

//   console.log(modifiedUpdatedData,id);
  
//   const result = await Student.findOneAndUpdate({id},modifiedUpdatedData,{new:true,runValidators:true}) 
   
     
//       return result;
//     }


// export const StudentServices = {
//   deleteStudentFromDB,
//   getAllStudentsFromDB,
//   getSingleStudentFromDB,
//   updateAStudentInDB
// };