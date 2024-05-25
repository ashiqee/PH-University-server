import { UserService } from "./user.service";
import { UserValidation } from "./user.validation";




const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const parsedUser = UserValidation.parse(userData)

    const result = await UserService.createUserIntoDB(parsedUser);

    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};



export const UserControllers = {
    createUser
  };
  