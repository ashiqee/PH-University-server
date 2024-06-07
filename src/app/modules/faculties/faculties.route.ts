import express from 'express';
import { FacultiesControllers } from './faculties.controler';
import { facultyValidations } from './faculties.validation';
import validateRequest from '../../middlewares/validateRequests';


const router = express.Router();
router.get('/', FacultiesControllers.getAllFaculties);

router.delete('/:facultyId',FacultiesControllers.deleteFaculties)

router.get('/:facultyId', FacultiesControllers.getSingleFaculties);

router.patch('/:facultyId', validateRequest(facultyValidations.createfacultyValidation), FacultiesControllers.updateAFaculties)


export const FacultiesRoutes =router;