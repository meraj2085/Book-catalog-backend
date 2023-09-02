### Live Link: https://book-catalog-backend-liard.vercel.app/

### Application Routes:

#### User

- api/v1/auth/signup (POST)
- api/v1/users (GET)
- api/v1/users/640072d4-486e-49b3-b414-5ee7f714a8cc (Single GET)
- api/v1/users/640072d4-486e-49b3-b414-5ee7f714a8cc (PATCH)
- api/v1/users/640072d4-486e-49b3-b414-5ee7f714a8cc (DELETE)
- api/v1/profile (GET)

### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/7dd9d29a-ee60-4c25-a513-cdcc180dc33d (Single GET)
- api/v1/categories/7dd9d29a-ee60-4c25-a513-cdcc180dc33d (PATCH)
- api/v1/categories/7dd9d29a-ee60-4c25-a513-cdcc180dc33d (DELETE)

### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId (GET)
- api/v1/books/:id (GET)
- api/v1/books/:id (PATCH)
- api/v1/books/:id (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET) 
- api/v1/orders/:orderId (GET)
