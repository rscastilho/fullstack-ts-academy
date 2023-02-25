import express from 'express';
import _perfilService from '../../../services/perfilService/perfilService';

class perfilController {
  router = express.Router();
  constructor() {
    this.perfil();
  }

  perfil() {
    this.router.post('/', _perfilService.addPerfil);
  }
}

export default new perfilController().router;
