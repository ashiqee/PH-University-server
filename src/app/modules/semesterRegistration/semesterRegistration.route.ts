
import express  from 'express';
import validateRequest from '../../middlewares/validateRequests';
import { SemesterRegistrationValidation } from './semesterRegistration.validation';
import { SemesterRegistrationControllers } from './semesterRegistration.controller';




const router = express.Router();


router.post('/',
validateRequest(SemesterRegistrationValidation.createSemesterRegistrationValidtionSchema),
SemesterRegistrationControllers.createSemesterRegistration)

router.get('/',SemesterRegistrationControllers.getAllSemesterRegistration);
router.get('/:id',SemesterRegistrationControllers.getSingleSemesterRegistration);

router.patch('/:id',
validateRequest(SemesterRegistrationValidation.updateSemesterRegistrationValidtionSchema),
SemesterRegistrationControllers.updateASemesterRegistration)



export const SemesterRegistrationRoutes = router;