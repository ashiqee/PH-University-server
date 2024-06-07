import { StudentServices } from './student.service';
import sendResponse from './../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';



const getAllStudents = catchAsync(async (req, res) => {
  
  const result = await StudentServices.getAllStudentsFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students are retrieved succesfully',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is retrieved succesfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is deleted succesfully',
      data: result,
    });
});


const updateAStudent = catchAsync(
  async(req,res)=>{
      const {studentId}= req.params;
      const {student}= req.body;
   
     
      
      const result = await StudentServices.updateAStudentInDB(studentId,student);

      sendResponse(res,{
          statusCode: httpStatus.OK,
          success:true,
          message: "Student info updated successfully",
          data: result,
      })
  } 
)

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  updateAStudent,
  deleteStudent,
};
