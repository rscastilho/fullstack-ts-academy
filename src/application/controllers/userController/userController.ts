import express from 'express';
import _userService from '../../../services/userService/userService';
import { imageUpload } from '../../util/filesUpload';
import userUpdateValidation from '../../util/validation/userUpdateValidation';
import validation from '../../util/validation/validation';

class userController {
  router = express.Router();

  constructor() {
    this.addAvatar();
  }

  private addAvatar() {
    this.router.post('/addavatar/:id', imageUpload.single('avatar'), _userService.addAvatar);
    this.router.patch('/deleteuser/:id', _userService.deleteUser);
    this.router.patch('/restoreuser/:id', _userService.restoreUser);
    this.router.patch('/unblockuser/:id', _userService.unblockUser);
    this.router.patch('/updateuser/:id', userUpdateValidation.userLoginValidator(), validation, _userService.updateUser);
    this.router.get('/', _userService.getallUser);
  }
}

export default new userController().router;
