import { ErrorRequestHandler, Request, Response } from 'express';
import { NextFunction } from 'express';
import { ZodError } from 'zod';
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  //setting default values
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';
  type TErrorsources = {
    path?: string | number;
    message: string;
  }[];
  let errorSources: TErrorsources = [
    { path: '', message: 'Something went wrong' },
  ];

const handleZodError = (err: ZodError) => {
  const formattedErrors: TErrorsources = err.issues.map((issue) => ({
    path: issue.path[issue.path.length - 1],
    message: issue.message,
  }));
  return formattedErrors;  
};

  if(err instanceof ZodError){
    statusCode= 400
    message= err.issues[0].message
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    amiError: err
  });
};

export default globalErrorHandler;
