import { Request, Response } from 'express';
import { connection } from './../../data/dbConnect';
import { RowDataPacket } from 'mysql2';
import _loginRepository from '../../repository/loginRepository/loginRepository';
import _userRepository from '../../repository/userRepository/userRepository';
import _testPassword from '../../application/util/testPassword';
import _tokenJwt from '../../application/util/tokenJwt';

class login {
  async login(req: Request, res: Response) {
    try {
      const userByEmail = await _userRepository.userByEmail(req.body.email);
      connection().query(userByEmail.query, userByEmail.fields, (err, data: RowDataPacket[]) => {
        err && res.json(err);
        if (data.length) {
          _testPassword.comparePassword(req.body.senha, data[0]['senha'], req.body.email, data[0]['id']).then((validaSenha: any) => {
            if (!validaSenha.message.includes('Login realizado com sucesso!')) {
              return res.status(validaSenha.status).json({ message: validaSenha.message });
            } else {
              _tokenJwt.createTokenJwt(data[0]['id'], req.body.email).then((token) => {
                return res.status(202).json({ message: `Bem vindo ${req.body.email}. Login realizado com sucesso!`, email: req.body.email, token: token });
              });
            }
          });
          return;
        } else {
          res.status(401).json({ message: `e-mail ${req.body.email} não cadastrado no sistema`});
          return;
        }
      });
    } catch (error) {
      res.status(400).json(error);
      return;
    }
  }
}

export default new login().login;
