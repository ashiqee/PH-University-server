import { Student } from './student.model';
import { TStudent } from './student.interface';



const getAllStudentsFromDB = async () => {
  const result = await Student.find();
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
