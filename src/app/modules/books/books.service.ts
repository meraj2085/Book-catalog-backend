import { Book, Category } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { paginationHelpers } from '../../../helpers/paginationHelper';

const createBook = async (data: Book) => {
  const book = await prisma.book.create({
    data,
  });
  return book;
};

const getAllBooks = async (filter, options) => {
  // const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const books = await prisma.book.findMany({});
  return books;
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
