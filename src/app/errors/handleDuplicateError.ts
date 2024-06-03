

import  mongoose  from 'mongoose';
import { TErrorsources, TGenericErrorResponse } from '../interface/error';


const handleDuplicateError  = (err: any) :TGenericErrorResponse => {
    const match = err.message.match(/"([^"]*)"/);
    const value = match && match[1] ;

    const errorSources : TErrorsources = [
        {
             path: '',
         message: `Duplicate error: ${value} is already exists`}
    ]
    

    const statusCode = 400;

    return {
        statusCode,
        message: "Cast Error[Invalid Id]",
        errorSources
    }
};

export default handleDuplicateError;