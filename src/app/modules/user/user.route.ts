import express from "express"
import { UserControllers } from './user.controller';

import validateRequest from "../../middlewares/validateRequests";
import { studentValidations } from "../student/student.validation";
import { facultyValidations } from "../faculties/faculties.validation";

const router = express.Router();



router.post('/create-user',validateRequest(studentValidations.createStudentValidationSchema), UserControllers.createStudent)
router.post('/create-faculty',validateRequest(facultyValidations.createfacultyValidation), UserControllers.createFaculties)



export const UserRoutes = router;