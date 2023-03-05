import express from 'express';
import planoService from '../../../services/planoService/planoService';

class planoController {
  router = express.Router();
  constructor() {
    this.plano()
  }

  private plano(){
    this.router.get('/', planoService.planoByid)

  }
}

export default new planoController().router;
