import { TCourse } from "./course.interface";
import { Course } from "./course.model"


const createCourseIntoDB = async ()=>{

    const result = await Course.create();
    return result;
}
const getAllCourseFromDB = async ()=>{

    const result = await Course.find();
    return result;
}
const getSingleCourseFromDB = async (id:string)=>{

    const result = await Course.findById(id);
    return result;
}
const deleteSingleCourseFromDB = async (id:string)=>{

    const result = await Course.findByIdAndUpdate(
        id,
        {isDeleted: true},
        {new:true}
    );
    return result;
}
const updateCourseIntoDB = async (id: string, payload: Partial<TCourse>)=>{


    const result = await Course.findByIdAndUpdate(
        id,
        {payload},
        {new:true}
    );
    return result;
}



export const CourseServices = {
    createCourseIntoDB,
    getAllCourseFromDB,
    getSingleCourseFromDB,
    deleteSingleCourseFromDB,
    updateCourseIntoDB
}