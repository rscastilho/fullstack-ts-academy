import { Request, Response } from 'express';
import { user } from '../../interfaces/user';
import _userRepository from '../../repository/userRepository/userRepository';
import { connection } from '../../data/dbConnect';
import { RowDataPacket } from 'mysql2';
import { StatusCodes } from 'http-status-codes';
import _presencaRepository from '../../repository/presencaRepository/presencaRepository';

class RegistrarService {
  async registrarPresenca(req: Request<{}, {}, user>, res: Response) {
    try {
      const numeroMatricula = req.body.numeroMatricula;
      const pegarNumeroMatriculaQuery = await _userRepository.userByNumeroMatricula(numeroMatricula);
      const pegarNumeroMatricula: RowDataPacket[] = await connection().promise().query(pegarNumeroMatriculaQuery.query, pegarNumeroMatriculaQuery.fields);

      if (pegarNumeroMatricula[0][0] === undefined) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: `Número de matrícula ${req.body.numeroMatricula} não encontrado!` });
      } else {
        const data = new Date();
        const user_id = +pegarNumeroMatricula[0][0]['id'];
        const registrarPresencaQuery = await _presencaRepository.registrarPresenca(data, user_id, 3);
        const registrarPresenca: RowDataPacket[] = await connection().promise().query(registrarPresencaQuery.query, registrarPresencaQuery.fields);
        if (registrarPresenca[0].affectedRows > 0) {
          return res.status(StatusCodes.OK).json({ message: `Seja bem vindo. Bom treino!` });
        }
      }
    } catch (error) {
      return error;
    }
  }
}

export default new RegistrarService();
