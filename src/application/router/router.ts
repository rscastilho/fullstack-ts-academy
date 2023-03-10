import express from 'express';
import loginController from '../controllers/loginController/loginController';
import presencaController from '../controllers/presencaController/presencaController';
import registerController from '../controllers/registerController/registerController';
import userController from '../controllers/userController/userController';
import funcaoController from '../controllers/funcaoController/funcaoController';
import perfilController from '../controllers/perfilController/perfilController';
import planoController from '../controllers/planoController/planoController';
import mensalidadeController from '../controllers/mensalidadeController/mensalidadeController';

class routers {
  routers = express.Router();

  constructor() {
    this.rotas();
  }

  private rotas() {
    this.routers.use('/api/login', loginController);
    this.routers.use('/api/register', registerController);
    this.routers.use('/api/user', userController);
    this.routers.use('/api/presenca', presencaController);
    this.routers.use('/api/funcao', funcaoController);
    this.routers.use('/api/perfil', perfilController);
    this.routers.use('/api/plano', planoController);
    this.routers.use('/api/mensalidade', mensalidadeController);
  }
}

export default new routers().routers;
