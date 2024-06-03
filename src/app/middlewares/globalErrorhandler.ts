import { ErrorRequestHandler, Request, Response } from 'express';

import { ZodError, ZodIssue } from 'zod';
import config from '../config';
import { TErrorsources } from '../interface/error';
import handleZodError from './../errors/handleZodError';
import handleValidationError from './../errors/handleValidationError';
import handleCastError from './../errors/handleCastError';
import handleDuplicateError from './../errors/handleDuplicateError';
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  //setting default values
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';



  let errorSources: TErrorsources = [
    { path: '', message: 'Something went wrong' },
  ];


  if(err instanceof ZodError){
   const simplifiederror = handleZodError(err)
   statusCode = simplifiederror.statusCode;
   message = simplifiederror.message;
   errorSources = simplifiederror.errorSources;
  
  } else if (err?.name === 'ValidationError') {
    
    const simplifiederror = handleValidationError(err)
    statusCode = simplifiederror?.statusCode;
    message = simplifiederror?.message;
    errorSources = simplifiederror?.errorSources;
  } else if (err?.name === 'CastError') {

    const simplifiederror = handleCastError(err)  
    statusCode = simplifiederror?.statusCode;
    message = simplifiederror?.message;
    errorSources = simplifiederror?.errorSources;
  }else if (err?.code === 11000) {

    const simplifiederror = handleDuplicateError(err)  
    statusCode = simplifiederror?.statusCode;
    message = simplifiederror?.message;
    errorSources = simplifiederror?.errorSources;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    err,
    stack : config.NODE_ENV === 'development'? err?.stack:null
    
  });
};

export default globalErrorHandler;
