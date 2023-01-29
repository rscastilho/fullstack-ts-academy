import express from 'express';
import loginController from '../controllers/loginController/loginController';
import registerController from '../controllers/registerController/registerController';

class routers {
  routers = express.Router();

  constructor() {
    this.rotas();
  }

  private rotas() {
    this.routers.use('/api/login', loginController);
    this.routers.use('/api/register', registerController);
  }
}

export default new routers().routers;
