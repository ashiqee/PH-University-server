import { z } from "zod";


const userValidationSchema = z.object({
    password: z.string({
        invalid_type_error : "Password mus be string"
    }).max(20,{message: "Password can not be more 20 char!"}).optional(),
    
   
})

export const UserValidation ={
    userValidationSchema,
}