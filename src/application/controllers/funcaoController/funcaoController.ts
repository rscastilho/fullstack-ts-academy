import express from 'express';
import _funcaoService from '../../../services/funcaoService/funcaoService';
import funcaoByDescricaoValidation from '../../util/validation/funcaoByDescricaoValidation';
import validation from '../../util/validation/validation';

class funcaoController {
  router = express.Router();

  constructor() {
    this.funcao();
  }

  private funcao() {
    this.router.get('/funcaobydescricao', funcaoByDescricaoValidation.funcaoByDescricao(), validation, _funcaoService.funcaoByDescricao);
    this.router.get('/:id', _funcaoService.funcaoById);
    this.router.post('/', _funcaoService.addFuncao);
  }
}

export default new funcaoController().router;
