import express from 'express';
import _presencaService from '../../../services/presencaService/presencaService';

class presencaController {
  router = express.Router();

  constructor() {
    this.registrarPresenca();
  }

  private registrarPresenca() {
    this.router.post('/', _presencaService.registrarPresenca);
  }
}

export default new presencaController().router;
