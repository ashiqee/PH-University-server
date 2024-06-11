import express from "express";
import validateRequest from "../../middlewares/validateRequests";
import { AcademicSemesterControllers } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';


const router = express.Router();


    
    router.post('/',
    validateRequest(AcademicSemesterValidation.createAcademicSemesterValidationSchema) ,
     AcademicSemesterControllers.createAcademicSemester)

     //get all
     router.get('/', AcademicSemesterControllers.getAllAcademicSemester)

// get signle academic semester 
router.get('/:semesterId', AcademicSemesterControllers.getSingleAcademicSemester)

//update academic semester data
router.patch('/:semesterId',
validateRequest(AcademicSemesterValidation.updateAcademicSemesterValidationSchema),
AcademicSemesterControllers.updateAcademicSemester)

export const AcademicSemesterRoutes = router;