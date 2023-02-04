import { Request, Response } from 'express';
import { connection } from './../../data/dbConnect';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { user } from './../../interfaces/user';
import _registerRepository from '../../repository/registerRepository/registerRepository';
import _userRepository from '../../repository/userRepository/userRepository';
import utils from '../../application/util/utils';
import _rashPassword from '../../application/util/passwordHash';

class registerService {
  constructor(){
    this.addUser
  }


  async addUser(req: Request, res: Response)  {
    try {
      const dados: user = req.body;
      dados.createAt = utils.hoje();
      //incluir quantidade de dias para expirar a senha
      dados.senhaExpiraEm = utils.addDias(60);
      dados.avatar = 'avatar.png';
      //pega a senha e faz o hash
      dados.senha = await _rashPassword.hashPassword(dados.senha);

      const result = await _registerRepository.addUser(
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
        dados.senhaExpiraEm
      );
      connection().query(result.query, result.fields, (err, data: ResultSetHeader) => {
        err && console.log(err);
        if (data === undefined) {
          return res.json({ message: 'Erro ao cadastrar usuário', error: err?.message });
        } else {
          _userRepository.userById(data.insertId).then((result) => {
            const id = data.insertId;
            connection().query(result.query, result.fields, (err, data:RowDataPacket[]) => {
              err && console.log(err);
              res.status(201).json({
                message: `Usuario ${data[0]['nomeCompleto'].toUpperCase()} -  Matrícula: ${data[0]['numeroMatricula']} cadastrado com sucesso!`,
                data,
              });
              return;
            });
          });
        }
      });
    } catch (error) {
      console.log(error);
      res.json(error);
       return error;
    }
  }
}

export default new registerService();
