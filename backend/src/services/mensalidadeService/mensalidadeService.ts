import { Request, Response } from 'express';
import utils from '../../application/util/utils';
import { user } from '../../interfaces/user';
import _mensalidadeRepository from '../../repository/mensalidadeRepository/mensalidadeRepository';
import userRepository from '../../repository/userRepository/userRepository';
import { iRetorno } from './../../interfaces/iRetorno';

class mensalidadeService {
  async registrarMensaliade(req: Request, res: Response): Promise<Response | iRetorno> {
    try {
      const { user_id, mes_id, status } = req.body;
      const pegarUser = await userRepository.userById(user_id);
      if (pegarUser.status === 400) {
        return res.status(pegarUser.status).json(pegarUser);
      }
      const { plano_id }: user = pegarUser.data;
      const dataPagamento = utils.hoje();
      const registerMensalidade = await _mensalidadeRepository.registrarMensalidade(user_id, dataPagamento, plano_id, mes_id, status);
      return res.status(registerMensalidade.status).json(registerMensalidade);
    } catch (error: any) {
      return error;
    }
  }
}

export default new mensalidadeService();
