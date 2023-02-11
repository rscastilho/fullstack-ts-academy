import express from 'express';
import _userService from '../../../services/userService/userService';
import { imageUpload } from '../../util/filesUpload';

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
  }
}

export default new userController().router;
