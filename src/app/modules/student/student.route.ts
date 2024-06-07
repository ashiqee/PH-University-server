import express from 'express';
import { StudentControllers } from './student.controller';
import validateRequest from '../../middlewares/validateRequests';
import { studentValidations } from './student.validation';

const router = express.Router();


router.get('/', StudentControllers.getAllStudents);


router.delete('/:id',StudentControllers.deleteStudent)

router.get('/:id', StudentControllers.getSingleStudent);

router.patch('/:id', validateRequest(studentValidations.updatedStudentValidationSchema), StudentControllers.updateAStudent)

export const StudentRoutes = router;
