import { Schema, model } from "mongoose";
import { TSemesterRegistration } from "./semesterRegistration.interface";
import { SemesterRegistrationStatus } from './semesterRegistration.constant';



const semesterRegistrationSchema =  new Schema<TSemesterRegistration>(
    {
       academicSemester:{
        type: Schema.Types.ObjectId,
        ref: 'AcademicSemester',
        unique:true,
        required:true,
       },
       status:{
        type:String,
        enum: SemesterRegistrationStatus,
        default:'UPCOMING',
       },
       startDate:{
        type:Date,
        required:true,
       },
       endDate:{
        type:Date,
        required:true,
       },
       minCredits:{
        type:Number,
        required:true,
        default:3
       },
       maxCredits:{
        type:Number,
        required:true,
        default:15
       }
    },{
        timestamps:true
    }
)


export const SemesterRegistration = model<TSemesterRegistration>('SemesterRegistration', semesterRegistrationSchema)