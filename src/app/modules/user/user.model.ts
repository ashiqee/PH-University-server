import { Schema, model } from "mongoose";
import { Tuser } from "./user.interface";


const userSchema = new Schema<Tuser>({
    id:{
        type: String,
        require:true,
    },
    password:{
        type: String,
        require:true,
    },
    needsPasswordChange:{
        type: Boolean,
        require:true,
    },
    role:{
        type: String,
        enum: ['student',"faculty",'admin']
    },
    status:{
        type: String,
        enum: ['in-progress','blooked'],
        default:'in-progress'
    },
    isDeleted:{
        type: Boolean,
        default:false,
    },
},
{
    timestamps:true,
}

)

export const UserModel = model<Tuser>('User',userSchema);