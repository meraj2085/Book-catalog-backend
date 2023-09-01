import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
      password: false,
    },
  });
  return users;
};

const getSingleUser = async (id: string): Promise<Partial<User> | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
      password: false,
    },
  });
  return user;
};

const updateUser = async (
  id: string,
  data: Partial<User>
): Promise<Partial<User> | null> => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
  });
  const { password, ...rest } = user;
  console.log(password);
  return rest;
};

const deleteUser = async (id: string): Promise<User> => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
};

export const UserService = {
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
