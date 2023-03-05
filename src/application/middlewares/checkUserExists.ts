import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import _planoRepository from '../../repository/planoRepository/planoRepository';
import _userRepository from '../../repository/userRepository/userRepository';

const checkUserExists = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { numeroMatricula, email, cpf, plano_id } = req.body;
    const userByNumeroMatricula = await _userRepository.userByNumeroMatricula(numeroMatricula);
    const userByEmail = await _userRepository.userByEmail(email);
    const userByCpf = await _userRepository.userByCpf(cpf);
    const isPlano = await _planoRepository.planoById(plano_id);

    if (userByNumeroMatricula.status === 200) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: `Matricula ${numeroMatricula} já cadastrada` });
    } else if (userByEmail.status === 200) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: `Email ${email} já está cadastrado` });
    } else if (userByCpf.status === 200) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: `CPF ${cpf} já está cadastrado` });
    } else if (isPlano.status === 400) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Erro ao processar plano.' });
    } else {
      next();
    }
  } catch (error: any) {
    return error;
  }
};

export default checkUserExists;
