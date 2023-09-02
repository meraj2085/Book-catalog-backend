"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidation = void 0;
const zod_1 = require("zod");
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
const Create = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'Title is required',
        }),
        author: zod_1.z.string({
            required_error: 'Author is required',
        }),
        price: zod_1.z.number({
            required_error: 'Price is required',
        }),
        genre: zod_1.z.string({
            required_error: 'Genre is required',
        }),
        publicationDate: zod_1.z.string({
            required_error: 'Publication Date is required',
        }),
        categoryId: zod_1.z.string({
            required_error: 'Category Id is required',
        }),
    }),
});
const Update = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'Title is required',
        }),
        author: zod_1.z.string({
            required_error: 'Author is required',
        }),
        price: zod_1.z.number({
            required_error: 'Price is required',
        }),
        genre: zod_1.z.string({
            required_error: 'Genre is required',
        }),
        publicationDate: zod_1.z.string({
            required_error: 'Publication Date is required',
        }),
        categoryId: zod_1.z.string({
            required_error: 'Category Id is required',
        }),
    }),
});
exports.BookValidation = {
    Create,
    Update,
};
