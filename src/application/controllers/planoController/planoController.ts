import express from 'express';
import planoService from '../../../services/planoService/planoService';
import _validation from '../../util/validation/validation';
import _planoValidation from '../../util/validation/planoValidation';

class planoController {
  router = express.Router();
  constructor() {
    this.plano();
  }

  private plano() {
    this.router.get('/', planoService.getAllPlanos);
    this.router.get('/id', planoService.planoByid);
    this.router.post('/', _planoValidation.planoValidation(), _validation, planoService.addPlano);
    this.router.get('/descricao', planoService.planoByDescricao);
  }
}

export default new planoController().router;
