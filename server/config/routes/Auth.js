import express from 'express';
import { UserAuth } from '../../app/controllers';

const AuthRoute = express.Router();

AuthRoute.post('/login', UserAuth.authenticateUser);

export default AuthRoute;
