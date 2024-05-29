import sendResponse from "../../utils/sendResponse"
import { AcademicSemester } from "./academicSemester.model"
import { AcademicSemesterServices } from './academicSemester.service';



const createAcademicSemester = async () => {

    const result = await AcademicSemester.AcademicSemesterServices.createAcademicSemesterIntoDB()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'AcademicSemester is created succesfully',
        data: result,
    })

}


export const AcademicSemesterControllers = {
    createAcademicSemester
}