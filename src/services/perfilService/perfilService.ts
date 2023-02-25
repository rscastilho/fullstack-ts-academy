import { Request, Response } from 'express';
import { iRetorno } from '../../interfaces/iRetorno';
import { body } from 'express-validator';
import { StatusCodes } from 'http-status-codes';
import _perfilRepository from '../../repository/perfilRepository/perfilRepository';

class perfilService {
  async addPerfil(req: Request, res: Response): Promise<iRetorno | Response> {
    try {
      const { User_id, funcao_id } = req.body;
      if (isNaN(User_id) || isNaN(funcao_id)) {
        return res.status(StatusCodes.BAD_GATEWAY).json({ message: 'Informe apenas números válidos' });
      }
      const perfil = await _perfilRepository.registarPerfil(User_id, funcao_id);
      if (perfil.status === 200) {
        return res.status(StatusCodes.OK).json(perfil);
      }
      if (perfil.status === 400) {
        return res.status(StatusCodes.BAD_REQUEST).json(perfil);
      }

      return res.json({ User_id, funcao_id });
    } catch (error: any) {
      return error;
    }
  }
}

export default new perfilService();
