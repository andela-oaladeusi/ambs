import http from 'http';
import dotenv from 'dotenv';
import logger from 'js-logger';
import app from './server/config/app';

dotenv.config({ silence: true });
logger.useDefaults();
const port = parseInt(process.env.PORT, 10);
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
logger.info(`AMBS is ${process.env.HOST}:${port}/`);
