import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { connection } from '../../data/dbConnect';
import { RowDataPacket } from 'mysql2';
import { user } from '../../interfaces/user';
import _userRepository from '../../repository/userRepository/userRepository';
import _presencaRepository from '../../repository/presencaRepository/presencaRepository';
import utils from '../../application/util/utils';

class RegistrarService {
  async registrarPresenca(req: Request<{}, {}, user>, res: Response) {
    try {
      const numeroMatricula = req.body.numeroMatricula;
      const pegarNumeroMatriculaQuery = await _userRepository.userByNumeroMatricula(numeroMatricula);

      if (pegarNumeroMatriculaQuery.status === 200) {
        const data = utils.hoje();
        const user_id = +pegarNumeroMatriculaQuery.data[0].id;
        const registrarPresencaQuery = await _presencaRepository.registrarPresenca(data, user_id, 1);
        const registrarPresenca: RowDataPacket[] = await connection().promise().query(registrarPresencaQuery.query, registrarPresencaQuery.fields);

        if (registrarPresenca[0].affectedRows > 0) {
          return res.status(StatusCodes.OK).json({ message: `Seja bem vindo. Bom treino!` });
        }
      } else {
        return res.status(pegarNumeroMatriculaQuery.status).json(pegarNumeroMatriculaQuery);
      }
    } catch (error: any) {
      return error;
    }
  }
}

export default new RegistrarService();
