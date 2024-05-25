import { z } from "zod";

// Define UserName schema
const UserNameSchema = z.object({
  firstName: z.string().nonempty({ message: "First name is required" }),
  middleName: z.string().nonempty({ message: "Middle name is required" }),
  lastName: z.string().nonempty({ message: "Last name is required" }),
});

// Define Guardian schema
const GuardianSchema = z.object({
  fatherName: z.string().nonempty({ message: "Father's name is required" }),
  fatherOccupation: z.string().nonempty({ message: "Father's occupation is required" }),
  fatherContactNo: z.string().nonempty({ message: "Father's contact number is required" }),
  motherName: z.string().nonempty({ message: "Mother's name is required" }),
  motherOccupation: z.string().nonempty({ message: "Mother's occupation is required" }),
  motherContactNo: z.string().nonempty({ message: "Mother's contact number is required" }),
});

// Define LocalGuardian schema
const LocalGuardianSchema = z.object({
  name: z.string().nonempty({ message: "Local guardian's name is required" }),
  occupation: z.string().nonempty({ message: "Local guardian's occupation is required" }),
  contactNo: z.string().nonempty({ message: "Local guardian's contact number is required" }),
  address: z.string().nonempty({ message: "Local guardian's address is required" }),
});

// Define Student schema
export const StudentValidationSchema = z.object({
  id: z.string().nonempty({ message: "ID is required" }),
  name: UserNameSchema,
  gender: z.enum(['male', 'female'], { 
    errorMap: () => ({ message: "Gender must be 'male' or 'female'" }) 
  }),
  dateOfBirth: z.string().optional(),
  email: z.string().email({ message: "Invalid email address" }),
  contactNo: z.string().nonempty({ message: "Contact number is required" }),
  emergencyContactNo: z.string().nonempty({ message: "Emergency contact number is required" }),
  bloogGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional()
    .refine(val => val !== undefined, { message: "Invalid blood group" }),
  presentAddress: z.string().nonempty({ message: "Present address is required" }),
  permanentAddres: z.string().nonempty({ message: "Permanent address is required" }),
  guardian: GuardianSchema,
  localGuardian: LocalGuardianSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked'], {
    errorMap: () => ({ message: "Status must be 'active' or 'blocked'" })
  }),
});

