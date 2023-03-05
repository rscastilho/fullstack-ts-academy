import { Request, Response } from 'express';
import _planoRepository from '../../repository/planoRepository/planoRepository';

class planoService {
  async planoByid(req: Request, res: Response) {
    try {
      const { id } = req.body;
      const plano = await _planoRepository.planoById(id);
      return res.json(plano);
    } catch (error) {
      return;
    }
  }
}

export default new planoService();
