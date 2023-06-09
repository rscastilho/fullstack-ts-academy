import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import _planoRepository from '../../repository/planoRepository/planoRepository';

class planoService {
  async planoByid(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.body;
      const plano = await _planoRepository.planoById(id);
      
      return res.json(plano);
    } catch (error: any) {
      return error;
    }
  }

  async getAllPlanos(req: Request, res: Response): Promise<Response> {
    try {
      const getAllPlanos = await _planoRepository.getAllPlanos();
      return res.status(getAllPlanos.status).json(getAllPlanos);
    } catch (error: any) {
      return error;
    }
  }
  async addPlano(req: Request, res: Response): Promise<Response> {
    try {
      const { valor, descricao } = req.body;

      const isPlano = await _planoRepository.planoByDescricao(descricao);
      if (isPlano.status === 200) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: `Plano ${descricao}, já cadastrado` });
      }
      const addPlano = await _planoRepository.addPlano(valor, descricao);
      return res.json(addPlano);
    } catch (error: any) {
      return error;
    }
  }
  async planoByDescricao(req: Request, res: Response): Promise<Response> {
    try {
      const { descricao } = req.body;
      const planoByDescricao = await _planoRepository.planoByDescricao(descricao);
      return res.status(planoByDescricao.status).json(planoByDescricao);
    } catch (error: any) {
      return error;
    }
  }

  async updatePlano(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      let { valor, descricao } = req.body;
      const pegarPlano = await _planoRepository.planoById(+id);
      if (pegarPlano.status === 400) {
        return res.status(pegarPlano.status).json(pegarPlano);
      } else {
        valor ? valor : (valor = pegarPlano.data[0].valor);
        descricao ? descricao : (descricao = pegarPlano.data[0].descicao);
        const update = await _planoRepository.updatePlano(valor, descricao, +id);
        return res.status(update.status).json(update);
      }
    } catch (error: any) {
      return error;
    }
  }
}

export default new planoService();
