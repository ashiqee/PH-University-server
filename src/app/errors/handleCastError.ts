
import  mongoose  from 'mongoose';
import { TErrorsources, TGenericErrorResponse } from '../interface/error';


const handleCastError = (err: mongoose.Error.CastError) :TGenericErrorResponse => {

    const errorSources : TErrorsources = [
        { path: err?.path, message: err?.message}
    ]
    

    const statusCode = 400;

    return {
        statusCode,
        message: "Cast Error[Invalid Id]",
        errorSources
    }
};

export default handleCastError;