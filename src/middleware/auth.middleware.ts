import express from 'express';
import { VALID_USERS } from '../userLogins';

class AuthMiddleware {
  async verifyUserPassword(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (!req.headers || !req.headers['authorization']) {
      return res.status(401).send('You need to provide userlogin and password!');
    }

    // implementation here
    const base64Credentials = req.headers.authorization?.split(' ')[1];

    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const username = credentials.split(':')[0];
    const pass = credentials.split(':')[1];
    const user = VALID_USERS.find(u => u.userLogin === username &&
      u.password === pass) || null;

    // authentication succesful, pass request onto next middleware
    if (user)
      return next();

    res.status(401).json({ errors: ['Invalid email and/or password'] });
  }
}


export default new AuthMiddleware();