import { body } from 'express-validator';

class funcaoByDescricaoValidation {
  funcaoByDescricao() {
    return [body('descricao').trim().notEmpty().withMessage('Preencha a descrição antes de pesquisar!').isString().withMessage('Campo descrição é de preenchimento obrigatório')];
  }
}

export default new funcaoByDescricaoValidation();
