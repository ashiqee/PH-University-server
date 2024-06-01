
import express  from 'express';


import validateRequest from '../../middlewares/validateRequests';
import { AcademicDepartmentValidation } from './academicDepartmnet.validation';
import { AcademicDepartmentControllers } from './academicDepartment.controller';



const router = express.Router();


router.post('/create-department',
validateRequest(AcademicDepartmentValidation.createAcademicDepartmentValidtionSchema),
AcademicDepartmentControllers.createAcademicDepartment)

router.get('/',AcademicDepartmentControllers.getAllAcademicDepartment);
router.get('/:id',AcademicDepartmentControllers.getSingleAcademicDepartment);

router.patch('/:id',
validateRequest(AcademicDepartmentValidation.updateAcademicDepartmentValidtionSchema),
AcademicDepartmentControllers.updateAAcademicDepartment)



export const AcademicDepartmentRoutes = router;