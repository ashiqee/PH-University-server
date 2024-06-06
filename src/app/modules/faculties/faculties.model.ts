import { Schema, model } from "mongoose";
import { TFaculties } from "./faculties.interface";



const facultiesSchema =  new Schema<TFaculties>(
    {
        id: { type: String,
        required: [true, 'ID is required'],
        unique: true },
        designation: {
            type: String,
            require: [true, 'Designation is required'],
        },
        name:{
            type: String,
            require: [true, 'Name is required'],
           
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