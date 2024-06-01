import { z } from "zod";


const createAcademicFacultyValidtionSchema = z.object({
    body :  z.object({
        name: z.string({
            invalid_type_error:'Academic faculty must be string'
        })
    })
})
const updateAcademicFacultyValidtionSchema = z.object({
    body :  z.object({
        name: z.string({
            invalid_type_error:'Academic faculty must be string'
        })
    })
})


export const AcademicFacultyValidation = {
    createAcademicFacultyValidtionSchema,
    updateAcademicFacultyValidtionSchema
}