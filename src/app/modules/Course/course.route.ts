import express from 'express';

import validateRequest from '../../middlewares/validateRequests';
import { CourseControllers } from './course.controller';
import { CourseValidations } from './course.validation';

const router = express.Router();
router.post(
  '/',
  validateRequest(CourseValidations.createCourseValidationSchema),
  CourseControllers.createCourse,
);
router.get('/', CourseControllers.getAllCourse);

router.delete('/:id', CourseControllers.deleteCourse);

router.get('/:id', CourseControllers.getSingleCourse);

router.patch(
  '/:id',
  validateRequest(CourseValidations.updateCourseValidationSchema),
  CourseControllers.updateACourse,
);
router.put(
  '/:courseId/assign-faculties',
  validateRequest(CourseValidations.facultyWithCourseValidationSchema),
  CourseControllers.assignFacultiesWithCourse,
);

router.delete(
  '/:courseId/remove-faculties',
  validateRequest(CourseValidations.facultyWithCourseValidationSchema),
  CourseControllers.removeFacultiesWithCourse,
);

export const CourseRoutes = router;
