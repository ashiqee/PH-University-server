import { Tuser } from "./user.interface";
import { UserModel } from "./user.model";


const createUserIntoDB = async (user: Tuser) => {
    const result = await UserModel.create(user);
    return result;
  };

  

  export const UserService = {
    createUserIntoDB
  }