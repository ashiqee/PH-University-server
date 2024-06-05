import { Schema, model } from "mongoose";
import { TFaculties } from "./faculties.interface";



const facultiesSchema =  new Schema<TFaculties>(
    {
        name:{
            type: String,
            required:true,
            unique: true
        }
    },{
        timestamps:true
    }
)


export const Faculties = model<TFaculties>('Faculties', facultiesSchema)