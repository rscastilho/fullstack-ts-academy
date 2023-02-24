import { body } from 'express-validator';

class userByNomeCompletoValidation {
  userLoginValidator() {
    return [body('nomeCompleto').isString().withMessage('Campo nome completo é de preenchimento obrigatório').notEmpty().withMessage("Preencha o nome completo antes de pesquisar!")];
  }
}

export default new userByNomeCompletoValidation();
