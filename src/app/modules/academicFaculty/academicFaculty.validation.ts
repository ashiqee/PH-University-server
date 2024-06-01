import { z } from "zod";


const academicFacultyValidtionSchema = z.object({
    name: z.string({
        invalid_type_error:'Academic faculty must be string'
    })
});


export const AcademicFacultyValidation = {
    academicFacultyValidtionSchema
}