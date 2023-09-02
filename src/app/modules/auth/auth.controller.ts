import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AuthService } from './auth.service';

const signUp = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.signUp(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'SignUp successfully',
    data: result,
  });
});

const signIn = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.signIn(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'SignIn successfully',
    token: result,
  });
});

export const AuthController = {
  signUp,
  signIn,
};
