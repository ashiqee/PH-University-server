
import { Request, Response } from 'express';
import { NextFunction } from 'express';
const globalErrorHandler = (err: any,req:Request,res:Response,next:NextFunction)=>{
    const statusCode = err.statusCode || 500
    const message =err.message || "Something went wrong"
    return res.status(statusCode).json({
      success: false,
      status: statusCode,
      message,
      error: err
    })
  }



  export default globalErrorHandler;