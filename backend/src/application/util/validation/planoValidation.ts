import { body } from 'express-validator';

class planoValidation {
  planoValidation() {
    return [
      body('valor').trim().notEmpty().withMessage('Preencha o Valor').isNumeric().withMessage('Campo Valor é de preenchimento obrigatório'),
      body('descricao').trim().notEmpty().withMessage('Preencha a Descrição').isString().withMessage('Campo descricao de preenchimento obrigatório').toLowerCase(),
    ];
  }
}

export default new planoValidation();
