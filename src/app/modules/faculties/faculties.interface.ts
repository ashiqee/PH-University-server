
import { Types } from 'mongoose';

export type TFaculties={
    id: string,
    name: string,
    designation: string,
    gender:string,
    dateOfBirth: string,
    email: string,
    contactNo: string,
    emergencyContactNo: string,
    presentAddress:string,
    permanentAddress:string,
    profileImage: string,
    academicFaculty:  Types.ObjectId,
    academicDepartment: Types.ObjectId,
    isDeleted: boolean,

}



