
import mongoose from 'mongoose';
import { Student } from './student.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { UserModel } from '../user/user.model';




const getAllStudentsFromDB = async () => {
  const result = await Student.find().populate('admissionSemester').populate(
    {
      path:'academicDepartment',
      populate:{
      path:'academicFaculty'
      }
  });
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

const deleteStudentFromDB = async(id: string) => {
  const isUserExists = await UserModel.findOne({ id: id });
  

  if (!isUserExists) {
      throw new AppError(httpStatus.BAD_REQUEST, "User does not exist");
  }

  const session = await mongoose.startSession()
  try{
 
    session.startTransaction()

  

    const deletedStudent = await Student.findOneAndUpdate(
      { id },{isDeleted: true},
      {new: true, session},
    );

    if(!deletedStudent) throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete student');

    const deletedUser = await UserModel.findOneAndUpdate(
      {id},
      {isDeleted: true},
      {new: true, session},
    )

    if(!deletedUser)throw new AppError(httpStatus.BAD_REQUEST,'Failed to delete user')

await session.commitTransaction()
await session.endSession();

  return deletedStudent;

  }catch(err){
    await session.abortTransaction()
    await session.endSession()
  }
  
}

export const StudentServices = {
  deleteStudentFromDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
