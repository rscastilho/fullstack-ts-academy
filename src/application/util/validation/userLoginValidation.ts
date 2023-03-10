import { body } from 'express-validator';

class userLoginValidation {
  userLoginValidator() {
    return [
      body('email').isString().withMessage('Campo email é de preenchimento obrigatório').isEmail().withMessage('Digite um email com formato válido').toLowerCase(),
      body('senha').notEmpty().withMessage('A senha não pode ser em branco').isString().withMessage('Campo senha é de preenchimento obrigatório').toLowerCase(),
    ];
  }
}

export default new userLoginValidation();
