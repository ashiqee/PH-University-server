import express, { NextFunction, Request, Response } from "express"
import { UserControllers } from './user.controller';
import { AnyZodObject } from "zod";
import { studentValidations } from "../student/student.validation";

const router = express.Router();

const validateRequest =(schema: AnyZodObject)=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
       
  try{
      //validation 
      await schema.parseAsync({
        
        body:req.body
    
});

next()

  }catch(err){
    next(err)
  }
}}

router.post('/create-user',validateRequest(studentValidations.StudentValidationSchema), UserControllers.createStudent)




export const UserRoutes = router;