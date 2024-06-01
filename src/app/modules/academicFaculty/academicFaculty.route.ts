
import express  from 'express';

import { AcademicFacultyValidation } from './academicFaculty.validation';
import validateRequest from '../../middlewares/validateRequests';
import { AcademicFacultyControllers } from './academicFaculty.controller';


const router = express.Router();


router.post('/create-faculty',
validateRequest(AcademicFacultyValidation.createAcademicFacultyValidtionSchema),
AcademicFacultyControllers.createAcademicFaculty)

router.get('/',AcademicFacultyControllers.getAllAcademicFaculty);
router.get('/:id',AcademicFacultyControllers.getSingleAcademicFaculty);

router.patch('/:id',
validateRequest(AcademicFacultyValidation.updateAcademicFacultyValidtionSchema),
AcademicFacultyControllers.updateAAcademicFaculty)



export const AcademicFacultyRoutes = router;