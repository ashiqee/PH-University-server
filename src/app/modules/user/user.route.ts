import express from "express"
import { UserControllers } from './user.controller';

import validateRequest from "../../middlewares/validateRequests";
import { studentValidations } from "../student/student.validation";
import { facultyValidations } from "../faculties/faculties.validation";
import { AdminValidations } from "../admin/admin.validations";

const router = express.Router();



router.post('/create-user',validateRequest(studentValidations.createStudentValidationSchema), UserControllers.createStudent)
router.post('/create-faculty',validateRequest(facultyValidations.createfacultyValidation), UserControllers.createFaculties)
router.post('/create-admin',validateRequest(AdminValidations.createAdminValidationSchema), UserControllers.createAdmin)



export const UserRoutes = router;