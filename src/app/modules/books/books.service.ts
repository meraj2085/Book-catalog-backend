import { Book, Category, Prisma } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { booksSearchableFields } from './books.constant';

const createBook = async (data: Book) => {
  const book = await prisma.book.create({
    data,
  });
  return book;
};

const getAllBooks = async (filter: any, options: any) => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const { search, ...filterData } = filter;
  const andConditions = [];

  if (search) {
    andConditions.push({
      OR: booksSearchableFields.map(field => ({
        [field]: {
          contains: search,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  const whereConditions: Prisma.BookWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.book.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: 'desc',
          },
  });

  const total = await prisma.book.count();

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getBooksByCategory = async (id: string) => {
  const books = await prisma.book.findMany({
    where: {
      categoryId: id,
    },
  });
  return books;
};

const getSingleBook = async (id: string) => {
  const book = await prisma.book.findMany({
    where: {
      id,
    },
  });
  return book;
};

const updateSingleBook = async (id: string, data: Partial<Category>) => {
  const book = await prisma.book.update({
    where: {
      id,
    },
    data,
  });
  return book;
};

const deleteBook = async (id: string) => {
  const book = await prisma.book.delete({
    where: {
      id,
    },
  });
  return book;
};

export const BookService = {
  createBook,
  getAllBooks,
  getBooksByCategory,
  getSingleBook,
  updateSingleBook,
  deleteBook,
};
