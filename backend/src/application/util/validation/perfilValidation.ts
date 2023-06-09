import { body } from 'express-validator';

class perfilValidation {
  perfilValidation() {
    return [
      body('User_id').trim().notEmpty().withMessage('Preencha o id do usuario').isString().withMessage('Campo id usuario é de preenchimento obrigatório'),
      body('funcao_id').trim().notEmpty().withMessage('Preencha o id da funcao').isString().withMessage('Campo id funcao é de preenchimento obrigatório'),
    ];
  }
}

export default new perfilValidation();
