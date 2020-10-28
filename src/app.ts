import * as express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import { cors } from './config';
import routes from './routes';

const app: express.Application = express();

app.use(cors.applyCors(process.env.NODE_ENV));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

export default app;
