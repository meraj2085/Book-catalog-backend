import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { Secret } from 'jsonwebtoken';

const signUp = async (data: User) => {
  const user = await prisma.user.create({
    data,
  });

  const { id, role } = user;
  const accessToken = jwtHelpers.createToken(
    { userId: id, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return { user, accessToken };
};

export const AuthService = {
  signUp,
};
