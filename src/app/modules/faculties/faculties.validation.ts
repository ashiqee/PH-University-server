import { z } from 'zod';


export const facultySchema = z.object({
    body: z.object({
    id: z.string().uuid("Invalid ID format, expected UUID"),
    name: z.string().min(1, "Name is required").max(100, "Name should not exceed 100 characters"),
    designation: z.string().min(1, "Designation is required").max(100, "Designation should not exceed 100 characters"),
    gender: z.enum(["Male", "Female"],{ 
        errorMap: () => ({ message: "Gender must be 'male' or 'female'" }) 
      }),
    dateOfBirth: z.string().refine(date => !isNaN(Date.parse(date)), "Invalid date format, expected YYYY-MM-DD"),
    email: z.string().email("Invalid email format"),
    contactNo: z.string().regex(/^\d{10}$/, "Contact number must be exactly 10 digits"),
    emergencyContactNo: z.string().regex(/^\d{10}$/, "Emergency contact number must be exactly 10 digits"),
    presentAddress: z.string().min(1, "Present address is required"),
    permanentAddress: z.string().min(1, "Permanent address is required"),
    profileImage: z.string().url("Invalid URL format for profile image"),
    academicFaculty: z.string(),
    academicDepartment: z.string(),
    })
});