import express from 'express';

const router = express.Router();
import { authRoutes } from '../modules/auth/auth.routes';

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
