import mongoose from "mongoose";
import { TErrorsources } from "../interface/error";


const handleValidationError = (err: mongoose.Error.ValidationError) => {

const errorSources: TErrorsources = Object.values(err.errors).map(
    (val: mongoose.Error.ValidationError | mongoose.Error.CastError) => {

    return {
        path: val?.path,
        message: val?.message
    };

},

)


const statusCode = 400;

return {
    statusCode,
    message: "Validation Error",
    errorSources
}
}


export default handleValidationError;