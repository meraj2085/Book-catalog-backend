import { z } from 'zod';

/* model Book {
  id               String            @id @default(uuid())
  title            String
  author           String
  price            Float
  genre            String
  publicationDate  DateTime
  categoryId       String
  category         Category          @relation(fields: [categoryId], references: [id])
  createdAt        DateTime          @default(now())
  updatedAt        DateTime          @updatedAt
  reviewAndRatings ReviewAndRating[]

  @@map("books")
} */

const Create = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    author: z.string({
      required_error: 'Author is required',
    }),
    price: z.number({
      required_error: 'Price is required',
    }),
    genre: z.string({
      required_error: 'Genre is required',
    }),
    publicationDate: z.string({
      required_error: 'Publication Date is required',
    }),
    categoryId: z.string({
      required_error: 'Category Id is required',
    }),
  }),
});

const Update = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    author: z.string({
      required_error: 'Author is required',
    }),
    price: z.number({
      required_error: 'Price is required',
    }),
    genre: z.string({
      required_error: 'Genre is required',
    }),
    publicationDate: z.string({
      required_error: 'Publication Date is required',
    }),
    categoryId: z.string({
      required_error: 'Category Id is required',
    }),
  }),
});

export const BookValidation = {
  Create,
  Update,
};
