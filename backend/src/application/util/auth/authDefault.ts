import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
const jwtSecret = process.env.JWT_SECRET;

const authDefault = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Usuário não autorizado' });
    }

    const pickToken = token && token.split(' ')[1];
    const validaToken: any = jwt.verify(String(pickToken), String(jwtSecret));

    if (validaToken.length < 1) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Erro ao validar token' });
    }

    next();
  } catch (error: any) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token Inválido! Realize o login novamente.' });
  }
};

export default authDefault;
