import { Request, Response } from 'express';
import { connection } from './../../data/dbConnect';
import { ErrorPacketParams, ResultSetHeader, RowDataPacket } from 'mysql2';
import { user } from './../../interfaces/user';
import _registerRepository from '../../repository/registerRepository/registerRepository';
import _userRepository from '../../repository/userRepository/userRepository';
import utils from '../../application/util/utils';
import _rashPassword from '../../application/util/passwordHash';
import { iRetorno } from './../../interfaces/iRetorno';
import { StatusCodes } from 'http-status-codes';
import _perfilRepository from '../../repository/perfilRepository/perfilRepository';
import planoRepository from '../../repository/planoRepository/planoRepository';

class registerService {
  constructor() {
    this.addUser;
  }

  async addUser(req: Request, res: Response): Promise<Response | iRetorno> {
    try {
      const dados: user = req.body;
      dados.createAt = utils.hoje();
      //incluir quantidade de dias para expirar a senha
      dados.senhaExpiraEm = utils.addDias(60);
      dados.avatar = 'avatar.png';
      //pega a senha e faz o hash
      dados.senha = await _rashPassword.hashPassword(dados.senha);

        const register = await _registerRepository.addUser(
        dados.numeroMatricula,
        dados.email,
        dados.nomeCompleto,
        dados.cpf,
        dados.dataNascimento,
        dados.telefone,
        dados.senha,
        dados.cep,
        dados.endereco,
        dados.complemento,
        dados.bairro,
        dados.cidade,
        dados.uf,
        dados.dataInicio,
        dados.avatar,
        dados.createAt,
        dados.senhaExpiraEm,
        dados.plano_id
      );

      if (register.status === 400) {
        return res.status(StatusCodes.BAD_REQUEST).json(register);
      }

      await _perfilRepository.registarPerfil(register.data[0].id, 3);
      return res.status(StatusCodes.OK).json(register);
    } catch (error: any) {
      console.log(error);
      res.json(error);
      return error;
    }
  }
}

export default new registerService();
