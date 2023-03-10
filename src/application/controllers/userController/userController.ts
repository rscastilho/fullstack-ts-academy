import express from 'express';
import _userService from '../../../services/userService/userService';
import { imageUpload } from '../../util/filesUpload';
import userByNomeCompletoValidation from '../../util/validation/userByNomeCompletoValidation';
import userUpdateValidation from '../../util/validation/userUpdateValidation';
import validation from '../../util/validation/validation';
import authDefault from './../../util/auth/authDefault';
import authAdmin from './../../util/auth/authAdmin';

class userController {
  router = express.Router();

  constructor() {
    this.addAvatar();
  }

  private addAvatar() {
    this.router.post('/addavatar/:id', imageUpload.single('avatar'), _userService.addAvatar);
    this.router.patch('/deleteuser/:id', authAdmin, _userService.deleteUser);
    this.router.patch('/restoreuser/:id', _userService.restoreUser);
    this.router.patch('/unblockuser/:id', _userService.unblockUser);
    this.router.patch('/updateuser/:id', userUpdateValidation.userLoginValidator(), validation, _userService.updateUser);
    this.router.get('/', authDefault, _userService.getallUser);
    this.router.get('/userbyNome', userByNomeCompletoValidation.userLoginValidator(), validation, _userService.getUserByNomeCompleto);
  }
}

export default new userController().router;
