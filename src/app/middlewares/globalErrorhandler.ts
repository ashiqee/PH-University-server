import { ErrorRequestHandler, Request, Response } from 'express';
import { NextFunction } from 'express';
import { ZodError, ZodIssue } from 'zod';
import { TErrorsources } from '../interface/error';
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  //setting default values
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';



  let errorSources: TErrorsources = [
    { path: '', message: 'Something went wrong' },
  ];

const handleZodError = (err: ZodError) => {
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

  if(err instanceof ZodError){
   const simplifiederror = handleZodError(err)
   statusCode = simplifiederror.statusCode;
   message = simplifiederror.message;
   errorSources = simplifiederror.errorSources;
   
   
    message= err.issues[0].message
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack : config.NODE_ENV === 'development'? err?.stack:null
    
  });
};

export default globalErrorHandler;
