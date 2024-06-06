
import { Types } from 'mongoose';




export type TUserName ={
    firstName: string;
  middleName: string;
  lastName: string;
}

export type TFaculties={
    id: string,
    user: Types.ObjectId,
    name: TUserName,
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



