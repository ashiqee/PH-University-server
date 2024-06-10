import { z } from "zod";
import { SemesterRegistrationStatus } from "./semesterRegistration.constant";


const createSemesterRegistrationValidtionSchema = z.object({
    body :  z.object({
        academicSemester: z.string(),
        status: z.enum([...(SemesterRegistrationStatus as [string, ...string[]])]),
        startDate: z.string().datetime(),
        endDate: z.string().datetime(),
        minCredits: z.number(),
        maxCredits: z.number(),
    })
})
const updateSemesterRegistrationValidtionSchema = z.object({
    body :  z.object({
        academicSemester: z.string().optional(),
        status: z.enum([...(SemesterRegistrationStatus as [string, ...string[]])]),
        startDate: z.string().datetime().optional(),
        endDate: z.string().datetime().optional(),
        minCredits: z.number().optional(),
        maxCredits: z.number().optional(),
    })
})


export const SemesterRegistrationValidation = {
    createSemesterRegistrationValidtionSchema,
    updateSemesterRegistrationValidtionSchema
}