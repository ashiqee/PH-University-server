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
const createStudentValidationSchema = z.object({
  body: z.object({
    password:z.string().max(20),
    student: z.object({
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
      permanentAddress: z.string().nonempty({ message: "Permanent address is required" }),
      guardian: GuardianSchema,
      localGuardian: LocalGuardianSchema,
      admissionSemester:z.string(),
      academicDepartment:z.string(),
     
      profileImg: z.string().optional(),
    })
    
   
  })
});


// Define UserName schema
const UpdateUserNameSchema = z.object({
  firstName: z.string().nonempty({ message: "First name is required" }).optional(),
  middleName: z.string().nonempty({ message: "Middle name is required" }).optional(),
  lastName: z.string().nonempty({ message: "Last name is required" }).optional(),
});

// Define Guardian schema
const UpdateGuardianSchema = z.object({
  fatherName: z.string().nonempty({ message: "Father's name is required" }).optional(),
  fatherOccupation: z.string().nonempty({ message: "Father's occupation is required" }).optional(),
  fatherContactNo: z.string().nonempty({ message: "Father's contact number is required" }).optional(),
  motherName: z.string().nonempty({ message: "Mother's name is required" }).optional(),
  motherOccupation: z.string().nonempty({ message: "Mother's occupation is required" }).optional(),
  motherContactNo: z.string().nonempty({ message: "Mother's contact number is required" }).optional(),
});

// Define LocalGuardian schema
const UpdateLocalGuardianSchema = z.object({
  name: z.string().nonempty({ message: "Local guardian's name is required" }).optional(),
  occupation: z.string().nonempty({ message: "Local guardian's occupation is required" }).optional(),
  contactNo: z.string().nonempty({ message: "Local guardian's contact number is required" }).optional(),
  address: z.string().nonempty({ message: "Local guardian's address is required" }).optional(),
});

// Define updatedStudentValidationSchema
const updatedStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20, { message: "Password must be 20 characters or less" }).optional(),
    student: z.object({
      name: UpdateUserNameSchema.optional(),
      gender: z.enum(['male', 'female'], { 
        errorMap: () => ({ message: "Gender must be 'male' or 'female'" }) 
      }).optional(),
      dateOfBirth: z.string().optional(),
      email: z.string().email({ message: "Invalid email address" }).optional(),
      contactNo: z.string().nonempty({ message: "Contact number is required" }).optional(),
      emergencyContactNo: z.string().nonempty({ message: "Emergency contact number is required" }).optional(),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], { message: "Invalid blood group" }).optional(),
      presentAddress: z.string().nonempty({ message: "Present address is required" }).optional(),
      permanentAddress: z.string().nonempty({ message: "Permanent address is required" }).optional(),
      guardian: UpdateGuardianSchema.optional(),
      localGuardian: UpdateLocalGuardianSchema.optional(),
      admissionSemester: z.string().nonempty({ message: "Admission semester is required" }).optional(),
      academicDepartment: z.string().nonempty({ message: "Academic department is required" }).optional(),
      profileImg: z.string().optional(),
    }).optional()
  })
});


export const studentValidations = {
  createStudentValidationSchema,
  updatedStudentValidationSchema
}