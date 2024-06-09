import httpStatus from "http-status";
import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/AppError";
import { CourseSearchableFields } from "./course.constant";
import { TCourse } from "./course.interface";
import { Course } from "./course.model"


const createCourseIntoDB = async (payload:TCourse)=>{


    const result = await Course.create(payload);
    return result;
}
const getAllCourseFromDB = async (query:Record<string,unknown> )=>{
    const courseQuery = new QueryBuilder(
        Course.find()
        .populate('preRequisiteCourses.course'),
        query,
    ).search(CourseSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields()
    const result = await courseQuery.modelQuery;
    // const meta = await facultiesQuery.countTotal();
    return {
    //   meta,
      result,
    };
}
const getSingleCourseFromDB = async (id:string)=>{

    const result = await Course.findById(id).populate('preRequisiteCourses.course');
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

    const {preRequisiteCourses, ...courseRemainingData}= payload;

    //step one ; basic course info update

    const updatedBasicCourseInfo = await Course.findByIdAndUpdate(
        id,
        courseRemainingData,
        {
            new:true,
            runValidators:true,
        }
    )

    //check if there is any pre requisite courses to update

    if(preRequisiteCourses && preRequisiteCourses.length > 0){
        //filter out the deleted fields
        const deletedPreRequisites = preRequisiteCourses.filter(el=> el.course && el.isDeleted)
        .map((el)=> el.course)

        const deletedPreRequisitesCourses = await Course.findByIdAndUpdate(
            id,
        {
            $pull: {preRequisiteCourses: {course: {$in: deletedPreRequisites}}}
        },    
    {new: true,
        runValidators:true,
    }
)
if (!deletedPreRequisitesCourses) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update course');
  }
    }


    //filter out the new course fields
    const newPreRequisites = preRequisiteCourses?.filter(el=> el.course && !el.isDeleted)

    console.log(newPreRequisites);
    
  
    return updatedBasicCourseInfo;
}



export const CourseServices = {
    createCourseIntoDB,
    getAllCourseFromDB,
    getSingleCourseFromDB,
    deleteSingleCourseFromDB,
    updateCourseIntoDB
}