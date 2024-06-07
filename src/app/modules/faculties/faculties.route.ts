import express from 'express';
import { FacultiesControllers } from './faculties.controler';
import { facultyValidations } from './faculties.validation';
import validateRequest from '../../middlewares/validateRequests';


const router = express.Router();
router.get('/', FacultiesControllers.getAllFaculties);

router.delete('/:id',FacultiesControllers.deleteFaculties)

router.get('/:id', FacultiesControllers.getSingleFaculties);

router.patch('/:id', validateRequest(facultyValidations.updateCreatefacultyValidation), FacultiesControllers.updateAFaculties)


export const FacultiesRoutes =router;