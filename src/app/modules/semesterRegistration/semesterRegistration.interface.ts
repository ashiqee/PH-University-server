
import { Types } from 'mongoose';


export type TSemesterRegistration = {
    academicSemester: Types.ObjectId;
    status: 'UPCOMING' | 'ENDED' | 'ONGOING';
    startDate: Date;
    endDate: Date;
    minCredits: number;
    maxCredits: number;
    
}