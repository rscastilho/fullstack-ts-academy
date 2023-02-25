import express from 'express';
import _loginController from '../controllers/loginController/loginController';
import _presencaController from '../controllers/presencaController/presencaController';
import _registerController from '../controllers/registerController/registerController';
import _userController from '../controllers/userController/userController';
import _funcaoController from '../controllers/funcaoController/funcaoController';
import _perfilController from '../controllers/perfilController/perfilController';

class routers {
  routers = express.Router();

  constructor() {
    this.rotas();
  }

  private rotas() {
    this.routers.use('/api/login', _loginController);
    this.routers.use('/api/register', _registerController);
    this.routers.use('/api/user', _userController);
    this.routers.use('/api/presenca', _presencaController);
    this.routers.use('/api/funcao', _funcaoController);
    this.routers.use('/api/perfil', _perfilController);
  }
}

export default new routers().routers;
