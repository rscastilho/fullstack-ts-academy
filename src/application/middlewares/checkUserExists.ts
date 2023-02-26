import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import _userRepository from '../../repository/userRepository/userRepository';

const checkUserExists = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { numeroMatricula, email, cpf } = req.body;
    const userByNumeroMatricula = await _userRepository.userByNumeroMatricula(numeroMatricula);
    const userByEmail = await _userRepository.userByEmail(email);
    const userByCpf = await _userRepository.userByCpf(cpf);

    if (userByNumeroMatricula.status === 200) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: `Numéro de matricula ${numeroMatricula} já está cadastrado` });
    } else if (userByEmail.status === 200) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: `Email ${email} já está cadastrado` });
    } else if (userByCpf.status === 200) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: `CPF ${cpf} já está cadastrado` });
    } else {
      next();
    }
  } catch (error: any) {
    return error;
  }
};

export default checkUserExists;
