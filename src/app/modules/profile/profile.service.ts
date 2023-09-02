import prisma from '../../../shared/prisma';

const getProfile = async (user: any) => {
  const { userId } = user;
  const users = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return users;
};

export const ProfileService = {
  getProfile,
};
