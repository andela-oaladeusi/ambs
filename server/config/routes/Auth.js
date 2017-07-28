import express from 'express';
import { UserAuth } from '../../app/controllers';

const AuthRoute = express.Router();

AuthRoute.post('/login', UserAuth.authenticateUser);
AuthRoute.post('/register', UserAuth.create)
AuthRoute.post('/logout', UserAuth.logout);

export default AuthRoute;
