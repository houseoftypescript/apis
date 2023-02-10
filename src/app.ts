import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { json, urlencoded } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { RegisterRoutes } from './routes';
import notFoundHandler from './common/middlewares/not-found';
import errorHandler from './common/middlewares/error';

const app = express();

app.use(json());
app.use(cookieParser());
app.use(cors());
app.use(morgan('combined'));
app.use(helmet());
app.use(urlencoded({ extended: true }));
app.use(compression());

RegisterRoutes(app);

app.use(notFoundHandler());
app.use(errorHandler);

export default app;
