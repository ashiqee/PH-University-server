
import { ZodError, ZodIssue } from 'zod';
import { TErrorsources, TGenericErrorResponse } from '../interface/error';


const handleZodError = (err: ZodError): TGenericErrorResponse => {
    const errorSources: TErrorsources = err.issues.map((issue : ZodIssue) => ({
      path: issue.path[issue.path.length - 1],
      message: issue.message,
    }));
  
    const statusCode =400;
    return {
      statusCode,
      message:"Zod validtion Error",
      errorSources
    };  
  };
  

  export default handleZodError;