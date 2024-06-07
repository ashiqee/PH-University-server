import express from 'express';

import validateRequest from '../../middlewares/validateRequests';
import { AdminControllers } from './admin.controller';
import { AdminValidations } from './admin.validations';


const router = express.Router();
router.get('/', AdminControllers.getAllAdmin);

router.delete('/:adminId',AdminControllers.deleteAdmin)

router.get('/:adminId', AdminControllers.getSingleAdmin);

router.patch('/:adminId', validateRequest(AdminValidations.updateAdminValidationSchema), AdminControllers.updateAAdmin)


export const AdminRoutes =router;