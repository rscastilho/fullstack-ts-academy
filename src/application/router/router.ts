import express from 'express';
import _loginController from '../controllers/loginController/loginController';
import _registerController from '../controllers/registerController/registerController';
import _userController from '../controllers/userController/userController';

class routers {
  routers = express.Router();

  constructor() {
    this.rotas();
  }

  private rotas() {
    this.routers.use('/api/login', _loginController);
    this.routers.use('/api/register', _registerController);
    this.routers.use('/api/user', _userController);
  }
}

export default new routers().routers;
