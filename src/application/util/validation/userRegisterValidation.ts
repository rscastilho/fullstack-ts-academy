import { body } from 'express-validator';

class userRegisterValidation {
  userRegisterValidator() {
    return [
      body('numeroMatricula').isNumeric().withMessage('Campo número matricula é de preenchimento obrigatório'),
      body('email').isEmail().withMessage('Digite um email com formato válido').isLength({ min: 10, max: 65 }).withMessage('Quantidade de caracteres incompativel'),
      body('nomeCompleto')
        .isString()
        .withMessage('Campo nome completo é de preenchimento obrigatório')
        .isLength({ min: 5, max: 70 })
        .withMessage('Quantidade de caracteres incompativel'),
      body('cpf').isString().withMessage('Campo cpf é de preenchimento obrigatório').isLength({ min: 11, max: 15 }).withMessage('Quantidade de caracteres incompativel'),
      body('dataNascimento')
        .isString()
        .withMessage('Campo data nascimento é de preenchimento obrigatório')
        .isLength({ min: 8, max: 25 })
        .withMessage('Quantidade de caracteres incompativel'),
      body('telefone').isString().withMessage('Campo telefone é de preenchimento obrigatório').isLength({ min: 8, max: 25 }).withMessage('Quantidade de caracteres incompativel'),
      body('senha')
        .notEmpty()
        .withMessage('A senha não pode ser vazia')
        .isString()
        .withMessage('Campo senha é de preenchimento obrigatório')
        .isLength({ min: 8, max: 30 })
        .withMessage('Quantidade de caracteres incompativel'),
      body('confirmarSenha')
        .notEmpty()
        .withMessage('A senha não pode ser vazia')
        .isString()
        .withMessage('Campo confirmar senha é de preenchimento obrigatório')
        .isLength({ min: 8, max: 30 })
        .withMessage('Quantidade de caracteres incompativel')
        .custom((value: string, { req }) => {
          if (value !== req.body.senha) {
            throw new Error('As senha digitadas devem ser iguais. Tente novamente.');
          }
          return true;
        }),
      body('cep').isString().withMessage('Campo cep é de preenchimento obrigatório').isLength({ min: 8 }).withMessage('CEP. Quantidade de caracteres incompativel'),
      body('endereco')
        .isString()
        .withMessage('Campo endereço é de preenchimento obrigatório')
        .isLength({ min: 9, max: 200 })
        .withMessage('ENDEREÇO. Quantidade de caracteres incompativel'),
      body('bairro')
        .isString()
        .withMessage('Campo bairro é de preenchimento obrigatório')
        .isLength({ min: 9, max: 45 })
        .withMessage('BAIRRO. Quantidade de caracteres incompativel'),
      body('cidade')
        .isString()
        .withMessage('Campo cidade é de preenchimento obrigatório')
        .isLength({ min: 3, max: 45 })
        .withMessage('CIDADE. Quantidade de caracteres incompativel'),
      body('uf').isString().withMessage('Campo uf é de preenchimento obrigatório').isLength({ min: 2 }).withMessage('UF. Quantidade de caracteres incompativel'),
    ];
  }
}
export default new userRegisterValidation();
