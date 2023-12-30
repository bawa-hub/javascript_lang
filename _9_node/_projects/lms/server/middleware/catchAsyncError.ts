import { NextFunction, Request, Response } from "express";

export default (theFunc: any) => (req: Request,res: Response,next: NextFunction) => {
    Promise.resolve(theFunc(req,res,next)).catch(next);
}