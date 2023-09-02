import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createCategory = async (data: Category) => {
  const category = await prisma.category.create({
    data,
  });
  return category;
};

const getAllCategory = async () => {
  const category = await prisma.category.findMany({});
  return category;
};

const getSingleCategory = async (id: string) => {
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });
  return category;
};

const updateCategory = async (id: string, data: Partial<Category>) => {
  const category = await prisma.category.update({
    where: {
      id,
    },
    data,
  });
  return category;
};

const deleteCategory = async (id: string) => {
  const category = await prisma.category.delete({
    where: {
      id,
    },
  });
  return category;
};

export const CategoryService = {
  createCategory,
  getAllCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
