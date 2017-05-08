import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as route from './routes/';

const app = express();

app.use(cors());
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1/roles', route.RoleRoute);
app.use('/api/v1/users', route.UserRoute);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome',
}));

export default app;
