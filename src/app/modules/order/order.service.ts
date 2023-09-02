// import { Order } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createOrder = async (id: string, data: any) => {
  const { orderedBooks, status } = data;
  const order = await prisma.order.create({
    data: {
      userId: id,
      orderedBooks,
      status: status,
    },
  });

  return order;
};

const getAllOrders = async (user: any) => {
  const { userId, role } = user;
  if (role === 'admin') {
    const order = await prisma.order.findMany({});
    return order;
  }
  const order = await prisma.order.findMany({
    where: {
      userId,
    },
  });
  return order;
};

const getSingleOrder = async (id: string) => {
  const order = await prisma.order.findUnique({
    where: {
      id,
    },
  });
  return order;
};

export const OrderService = {
  createOrder,
  getAllOrders,
  getSingleOrder,
};
