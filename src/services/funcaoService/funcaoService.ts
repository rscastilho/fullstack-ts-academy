import { Request, Response } from 'express';
import _funcaoRepository from '../../repository/funcaoRepository/funcaoRepository';
import { StatusCodes } from 'http-status-codes';
import { iRetorno } from '../../interfaces/iRetorno';

class funcaoService {
  async funcaoById(req: Request, res: Response): Promise<Response | iRetorno> {
    try {
      const { id } = req.params;
      if (isNaN(+id)) {
        return res.json({ message: 'Digite um ID válido, em formato número' });
      }

      const funcao: iRetorno = await _funcaoRepository.funcaoById(+id);

      if (funcao.status === 400) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: funcao.message });
      } else {
        return res.status(StatusCodes.OK).json({ data: funcao.data });
      }
    } catch (error: any) {
      return error;
    }
  }

  async funcaoByDescricao(req: Request, res: Response): Promise<Response | iRetorno> {
    try {
      const { descricao } = req.body;
      const funcao: iRetorno = await _funcaoRepository.funcaoByDescricao(`%${descricao}%`);
      if (funcao.status === 400) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: funcao.message });
      } else {
        return res.status(StatusCodes.OK).json({ resgistros: funcao.registros, data: funcao.data });
      }
    } catch (error: any) {
      return error;
    }
  }

  async addFuncao(req: Request, res: Response): Promise<Response | iRetorno> {
    try {
      const { descricao } = req.body;
      const funcao = await _funcaoRepository.funcaoByDescricao(`%${descricao}%`);
      if (funcao.status === 400) {
        const result: iRetorno = await _funcaoRepository.addFuncao(descricao);
        if (result.status === 200) {
          return res.status(StatusCodes.OK).json({ message: result.message, data: result.data });
        } else {
          return res.status(StatusCodes.BAD_REQUEST).json({ message: result.message });
        }
      } else {
        return res.json({ message: `Função ${descricao} já existe!` });
      }
    } catch (error: any) {
      return error;
    }
  }
}

export default new funcaoService();
