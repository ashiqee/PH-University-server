import { Schema, model } from "mongoose";
import { Tuser } from "./user.interface";
import bcrypt from 'bcrypt';
import config from "../../config";

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
        default:true,
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


userSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this; // doc
    // hashing password and save into DB
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_rounds),
    );
    next();
  });
  
  // set '' after saving password
  userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
  });
  
  userSchema.statics.isUserExistsByCustomId = async function (id: string) {
    return await UserModel.findOne({ id }).select('+password');
  };
  
  userSchema.statics.isPasswordMatched = async function (
    plainTextPassword,
    hashedPassword,
  ) {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  };
  
  userSchema.statics.isJWTIssuedBeforePasswordChanged = function (
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ) {
    const passwordChangedTime =
      new Date(passwordChangedTimestamp).getTime() / 1000;
    return passwordChangedTime > jwtIssuedTimestamp;
  };

export const UserModel = model<Tuser>('User',userSchema);