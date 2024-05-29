import express from "express";
import validateRequest from "../../middlewares/validateRequests";
import { AcademicSemesterControllers } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';


const router = express.Router();


    
    router.post('/create-academic-semester',
    validateRequest(AcademicSemesterValidation.createAcademicSemesterValidationSchema) ,
     AcademicSemesterControllers.createAcademicSemester)

     //get all
     router.get('/getAll-academic-semester', AcademicSemesterControllers.getAllAcademicSemester)

// get signle academic semester 
router.get('/getA-acemedic-semester/:semesterId', AcademicSemesterControllers.getSingleAcademicSemester)

//update academic semester data
router.patch('/update-academic-semester/:semesterId',
validateRequest(AcademicSemesterValidation.createAcademicSemesterValidationSchema),
AcademicSemesterControllers.updateAcademicSemester)

export const AcademicSemesterRoutes = router;