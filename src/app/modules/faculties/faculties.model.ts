import { Schema, model } from "mongoose";
import { TFaculties, TUserName } from "./faculties.interface";


const userNameSchema = new Schema<TUserName>({
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  });


const facultiesSchema =  new Schema<TFaculties>(
    {
        id: { type: String,
        required: [true, 'ID is required'],
        unique: true },
       
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'user id is required'],
            unique: true,
          },
        
          name: userNameSchema,
          designation: {
            type: String,
            require: [true, 'Designation is required'],
        },
        gender: {
            gender: ['male', 'female'],
            require: [true,'gender is required']
        },
        dateOfBirth: {
            type: String,
            require: [true,'dateOfBirth is required']
        },
        email: {
            type: String,
            require: [true,'email is required']
        },
        contactNo: {
            type: String,
            require: [true,'contactNo is required']
        },
              emergencyContactNo: {
            type: String,
            require: [true,'emergencyContactNo is required']
        },
        presentAddress: {
            type: String,
            require: [true,'presentAddress is required']
        },
        permanentAddress: {
            type: String,
            require: [true,'permanentAddress is required']
        },
        profileImage: {
            type: String,
            require: [true,'profileImage is required']
        },
        academicFaculty: {
            type: Schema.Types.ObjectId,
            require: [true,'academicFaculty is required']
        },
        academicDepartment: {
            type: Schema.Types.ObjectId,
            require: [true,'academicDepartment is required']
        },
        isDeleted: {
            type: Boolean,
            default:false,
        },
    },{
        timestamps:true
    }
)


export const Faculties = model<TFaculties>('Faculties', facultiesSchema)