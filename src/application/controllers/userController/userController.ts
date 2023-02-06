import express, { Application } from 'express';
import _userService from '../../../services/userService/userService';
import { imageUpload } from '../../util/filesUpload';

class userController {
  router = express.Router();

  constructor() {
    this.addAvatar();
  }

  private addAvatar() {
    this.router.post('/addavatar/:id', imageUpload.single('avatar'), _userService.addAvatar);
  }
}

export default new userController().router;
