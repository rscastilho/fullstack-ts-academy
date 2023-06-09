import { body } from 'express-validator';

class userUpdateValidation {
  userLoginValidator() {
    return [
      body('email').isEmail().withMessage('Digite um email com formato válido').toLowerCase(),
      body('dataNascimento').isDate().withMessage('Digite uma data valida para a data de nascimento'),
      body('uf').isLength({ max: 2 }).withMessage('Quantidade máxima 2 caracteres para o campo UF').toLowerCase(),
    ];
  }
}

export default new userUpdateValidation();
