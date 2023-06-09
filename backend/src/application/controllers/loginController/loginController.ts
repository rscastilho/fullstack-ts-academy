import express, { Response } from 'express';
import { connection } from '../../../data/dbConnect';
import { RowDataPacket, QueryError, OkPacket, ResultSetHeader } from 'mysql2';
import loginService from '../../../services/loginService/loginService';
import _validation from './../../util/validation/validation';
import _loginValidator from './../../util/validation/userLoginValidation';

class loginController {
  router = express.Router();

  constructor() {
    this.login();
    this.logout();
  }

  private async login() {
    return this.router.post('/', _loginValidator.userLoginValidator(), _validation, loginService);
    
  }

  private logout() {
    this.router.get('/log', (req, res) => {
      return res.status(200).json({ message: 'cheguei no login outra rota' });
    });
  }
}

export default new loginController().router;
