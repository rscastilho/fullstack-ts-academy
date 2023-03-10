import express from 'express';
import _registerService from '../../../services/registerService/registerService';
import _validation from '../../util/validation/validation';
import _userRegisterValidation from '../../util/validation/userRegisterValidation';
import checkUserExists from './../../middlewares/checkUserExists';

class registerController {
  router = express.Router();
  constructor() {
    this.register();
  }

  private register() {
    this.router.post('/', _userRegisterValidation.userRegisterValidator(), _validation, checkUserExists, _registerService.addUser);
  }
}

export default new registerController().router;
