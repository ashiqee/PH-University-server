
import { Student } from './student.model';




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
  const result = await Student.deleteOne({ id });
  return result;
}

export const StudentServices = {
  deleteStudentFromDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
