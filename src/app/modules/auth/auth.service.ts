import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { Secret } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';

const signUp = async (data: User) => {
  const user = await prisma.user.create({
    data,
  });

  const { password, createdAt, updatedAt, ...userWithoutPassword } = user;
  console.log(password, createdAt, updatedAt);

  return userWithoutPassword;
};

const signIn = async (data: User) => {
  const { email, password } = data;

  const user = await prisma.user.findUnique({
    where: { email: email },
  });
  if (!user) {
    throw new ApiError(404, 'User not found');
  } else if (user.password !== password) {
    throw new ApiError(400, 'Wrong password');
  }

  const { id, role } = user;
  const accessToken = jwtHelpers.createToken(
    { userId: id, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return accessToken;
};

export const AuthService = {
  signUp,
  signIn,
};
