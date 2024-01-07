require('dotenv').config();
import { Request, Response, NextFunction } from "express";
import userModel from "../models/user.model";
import ErrorHandler from "../utils/ErrorHandler";
import catchAsyncError from "../middleware/catchAsyncError";
import jwt, { Secret } from 'jsonwebtoken'
import ejs from 'ejs';
import path from "path";
import sendMail from "../utils/sendMail";

interface IRegisterationBody {
    name: string;
    email: string;
    password: string;
    avatar: string;
}

export const registerationUser = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, password, avatar } = req.body;
        const isEmailExist = await userModel.findOne({ email });

        if (isEmailExist) {
            return next(new ErrorHandler("Email already exists", 400));
        }

        const user: IRegisterationBody = {
            name,
            email,
            password,
            avatar
        }

        const activationToken = createActivationToken(user);

        const activationCode = activationToken.activationCode;

        const data = { user: { name: user.name }, activationCode };
        const html = ejs.renderFile(path.join(__dirname + "/../mails/activation-mail.ejs"), data);

        try {
            await sendMail({
                email: user.email,
                subject: "Account Activation",
                template: "activation-mail.ejs",
                data
            })

            res.status(201).json({
                success: true,
                message: `please check your email ${user.email} to activate your accoutnt`,
                activationToken: activationToken.token
            })
        } catch (error: any) {
            return next(new ErrorHandler(error.message, 400))
        }

    } catch (error: any) {
        return next(new ErrorHandler(error.message, 400));
    }
})

interface IActivationToken {
    token: string;
    activationCode: string
}

export const createActivationToken = (user: any): IActivationToken => {
    const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
    const token = jwt.sign({ user, activationCode }, process.env.JWT_SECRET as Secret, { expiresIn: '5m' });
    return { token, activationCode };
}