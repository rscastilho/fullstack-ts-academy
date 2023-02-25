import { Request, Response } from 'express';
import _funcaoRepository from '../../repository/funcaoRepository/funcaoRepository';
import { StatusCodes } from 'http-status-codes';
import { RowDataPacket } from 'mysql2';
import { retorno } from '../../interfaces/iretorno';


class funcaoService {
  async funcaoById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (isNaN(+id)) {
        return res.json({ message: 'Digite um ID válido, em formato número' });
      }

      const funcao = await _funcaoRepository.funcaoById(+id);

      if (funcao.status === 400) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: funcao.message });
      } else {
        return res.status(StatusCodes.OK).json({ resgistros: funcao[0].length, data: funcao[0] });
      }
    } catch (error) {
      return error;
    }
  }

  async funcaoByDescricao(req: Request, res: Response) {
    try {
      const { descricao } = req.body;
      const funcao = await _funcaoRepository.funcaoByDescricao(`%${descricao}%`);
      if (funcao.status === 400) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: funcao.message });
      } else {
        return res.status(StatusCodes.OK).json({ resgistros: funcao[0].length, data: funcao[0] });
      }
    } catch (error) {
      return error;
    }
  }

  async addFuncao(req: Request, res: Response) {
    try {
      const { descricao } = req.body;
      const funcao = await _funcaoRepository.funcaoByDescricao(`%${descricao}%`);
      if (funcao.status === 400) {
        const result: retorno = await _funcaoRepository.addFuncao(descricao);
        if (result.status === 200) {
          return res.status(StatusCodes.OK).json({ message: result.message, data: result.data });
        } else {
          return res.status(StatusCodes.BAD_REQUEST).json({ message: result.message });
        }
      } else {
        return res.json({ message: `Função ${descricao} já existe!` });
      }

      console.log(funcao);
    } catch (error) {
      return error;
    }
  }
}

export default new funcaoService();
