import express from 'express';
import { StudentControllers } from './student.controller';
import validateRequest from '../../middlewares/validateRequests';
import { studentValidations } from './student.validation';

const router = express.Router();


router.get('/', StudentControllers.getAllStudents);


router.delete('/:studentId',StudentControllers.deleteStudent)

router.get('/:studentId', StudentControllers.getSingleStudent);

router.patch('/:studentId', validateRequest(studentValidations.updatedStudentValidationSchema), StudentControllers.updateAStudent)

export const StudentRoutes = router;
