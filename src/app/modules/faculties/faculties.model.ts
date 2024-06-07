import { Schema, model } from "mongoose";
import { FacultiesModel, TFaculties, TUserName } from "./faculties.interface";
import { Gender } from "./faculties.constant";


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
            type: String,
            enum: {
              values: Gender,
              message: '{VALUE} is not a valid gender',
            },
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
           ref:"AcademicFaculty"
        },
        academicDepartment: {
            type: Schema.Types.ObjectId,
            ref:"AcademicDepartment"
        },
        isDeleted: {
            type: Boolean,
            default:false,
        },
    },{
toJSON: {virtuals:true},
timestamps:true
    },
   
);

//virtual name

facultiesSchema.virtual('fullName').get(function(){
    return `${this?.name?.firstName}  ${this?.name?.middleName}  ${this?.name?.lastName}`;
})


export const Faculties = model<TFaculties,FacultiesModel>('Faculties', facultiesSchema)