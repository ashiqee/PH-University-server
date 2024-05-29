import express from "express";
import validateRequest from "../../middlewares/validateRequests";
import { AcademicSemesterControllers } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';


const router = express.Router();


    
    router.post('/create-academic-semester',
    validateRequest(AcademicSemesterValidation.createAcademicSemesterValidationSchema) ,
     AcademicSemesterControllers.createAcademicSemester)




export const AcademicSemesterRoutes = router;