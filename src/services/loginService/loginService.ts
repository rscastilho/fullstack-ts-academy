import { Request, Response } from 'express';
import { connection } from './../../data/dbConnect';
import { RowDataPacket} from 'mysql2';
import _loginRepository from '../../repository/loginRepository/loginRepository';
import _userRepository from '../../repository/userRepository/userRepository';
import _testPassword from '../../application/util/testPassword';
import _tokenJwt from '../../application/util/tokenJwt';
import { StatusCodes } from 'http-status-codes';

class login {
  async login(req: Request, res: Response) {
    try {
      const userByEmailQuery = await _userRepository.userByEmail(req.body.email);
      const data: RowDataPacket[] = await connection().promise().query(userByEmailQuery.query, userByEmailQuery.fields);
      if (data[0].length === 0) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: `Usuário ${req.body.email} não cadastrado no sistema` });
      }

      if (data[0][0]['deleted'] > 0) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: `Impossivel logar no sistema, usuário ${req.body.email} foi deletado.` });
      }
      if (data[0][0]['blocked'] > 0) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: `Usuário ${req.body.email} bloqueado` });
      }
      if (data[0][0]['senhaExpirar'] > 0) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: `${req.body.email} sua senha expirou!` });
      }
      if (data[0].length !== 0) {
        const validaSenha = await _testPassword.comparePassword(req.body.senha, data[0][0]['senha'], req.body.email, data[0][0]['id']);
        if (!validaSenha.message.includes('Login realizado com sucesso!')) {
          return res.status(validaSenha.statusCode).json({ message: validaSenha.message });
        } else {
          _tokenJwt.createTokenJwt(data[0][0]['id'], req.body.email).then((token) => {
            return res.status(StatusCodes.OK).json({ message: `Bem vindo ${req.body.email}. Login realizado com sucesso!`, email: req.body.email, token: token });
          });
        }
      }
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ erro: error });
    }
  }
}

export default new login().login;
