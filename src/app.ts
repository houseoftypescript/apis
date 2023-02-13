import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { json, urlencoded } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import errorHandler from './common/middlewares/error';
import notFoundHandler from './common/middlewares/not-found';
import { RegisterRoutes } from './routes';

const NODE_ENV: string = process.env.NODE_ENV || 'development';

const app = express();

app.use(cors());
app.use(json());
app.use(compression());
app.use(cookieParser());
app.use(morgan('combined'));
app.use(urlencoded({ extended: true }));

const devContentSecurityPolicy = {
  directives: {
    scriptSrc: ["'self'", "'unsafe-inline'", 'https://cdn.jsdelivr.net'],
    imgSrc: ["'self'", 'data:', 'https://cdn.jsdelivr.net'],
  },
};
app.use(
  helmet({
    contentSecurityPolicy:
      NODE_ENV === 'production' ? undefined : devContentSecurityPolicy,
  })
);

RegisterRoutes(app);

app.use(notFoundHandler({ whitelist: ['/graphql'] }));
app.use(errorHandler);

export default app;
