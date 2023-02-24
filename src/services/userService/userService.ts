import { Request, Response } from 'express';
import _userRepository from '../../repository/userRepository/userRepository';
import { connection } from './../../data/dbConnect';
import { RowDataPacket } from 'mysql2';
import { StatusCodes } from 'http-status-codes';
import fs from 'fs';

class userService {
  async addAvatar(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const avatar = req.file?.filename;

      // pegar nome avatar cadastrado e deletar se existir se estiver na pasta
      const pickAvatar = await _userRepository.pickAvatar(+id);
      const pickedAvatar: RowDataPacket[] = await connection().promise().query(pickAvatar.query, pickAvatar.fields);
      pickedAvatar[0].map((imgEncontrada: any) => {
        fs.readdir('src/public/avatar', (err, data) => {
          data.map((img) => {
            if (img === imgEncontrada.avatar) {
              fs.unlinkSync(`src/public/avatar/${imgEncontrada.avatar}`);
              return;
            }
          });
        });
      });

      const avatarQuery = await _userRepository.addAvatar(+id, avatar || 'image.jpg');
      const resultQuery: RowDataPacket[] = await connection().promise().query(avatarQuery.query, avatarQuery.fields);
      if (!resultQuery[0].affectedRows) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Erro ao salvar avatar' });

      return res.status(StatusCodes.OK).json({ message: 'Avatar salvo com sucesso!' });
    } catch (error) {
      console.log('ERR', error);
      return res.status(StatusCodes.OK).json({ message: error });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<Response | Error> {
    //funcao deleta e restaura usuario
    try {
      const { id } = req.params;
      const pegarUserQuery = await _userRepository.userById(+id);
      const pegarUser: RowDataPacket[] = await connection().promise().query(pegarUserQuery.query, pegarUserQuery.fields);
      if (!pegarUser[0].length) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Usuário não cadastrado' });
      }

      const deleted = !pegarUser[0][0]['deleted'];
      const deletedAt: Date = new Date();
      if (!deleted) {
        const deleteUserQuery = await _userRepository.deleteUser(deleted, deletedAt, +id);
        const deleteUser: RowDataPacket[] = await connection().promise().query(deleteUserQuery.query, deleteUserQuery.fields);
        if (deleteUser[0]['affectedRows'] > 0) {
          return res.status(StatusCodes.OK).json({ message: 'Usuário restaurado com sucesso!' });
        } else {
          return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Erro ao restaurar usuário.' });
        }
      } else {
        const deleteUserQuery = await _userRepository.deleteUser(deleted, deletedAt, +id);
        const deleteUser: RowDataPacket[] = await connection().promise().query(deleteUserQuery.query, deleteUserQuery.fields);
        if (deleteUser[0]['affectedRows'] > 0) {
          return res.status(StatusCodes.OK).json({ message: 'Usuario deletado com sucesso!' });
        } else {
          return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Erro ao deletar usuario.' });
        }
      }
    } catch (error) {
      return res.json(error);
    }
  }

  async restoreUser(req: Request, res: Response): Promise<Error | Response> {
    //funcao somente restaura usuario
    try {
      const { id } = req.params;
      const pegarUserQuery = await _userRepository.userById(+id);
      const pegarUser: RowDataPacket[] = await connection().promise().query(pegarUserQuery.query, pegarUserQuery.fields);
      if (!pegarUser[0].length) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Usuário não cadastrado' });
      }
      const deleted: boolean = false;
      const deletedAt: Date = new Date();

      const deleteUserQuery = await _userRepository.deleteUser(deleted, deletedAt, +id);
      const deleteUser: RowDataPacket[] = await connection().promise().query(deleteUserQuery.query, deleteUserQuery.fields);
      if (deleteUser[0]['affectedRows'] > 0) {
        return res.status(StatusCodes.OK).json({ message: 'Usuário restaurado com sucesso!' });
      } else {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Erro ao restaurar usuário.' });
      }
    } catch (error: any) {
      return error.message;
    }
  }

  async unblockUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const blocked: boolean = false;
      const unblockQuery = await _userRepository.unblockUser(blocked, new Date(), +id);
      const unblock = await connection().promise().query(unblockQuery.query, unblockQuery.fields);
      if (unblock[0]['affectedRows'] > 0) {
        res.status(StatusCodes.OK).json({ message: `Usuário desbloqueado com sucesso!` });
      } else {
        res.status(StatusCodes.BAD_REQUEST).json({ message: `Erro ao desbloquear usuário` });
      }
    } catch (error) {
      return res;
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      let { nomeCompleto, email, dataNascimento, telefone, cep, endereco, complemento, bairro, cidade, uf } = req.body;
      const updateAt = new Date();
      const pegaUserQuery = await _userRepository.userById(+id);
      const userById: RowDataPacket[] = await connection().promise().query(pegaUserQuery.query, pegaUserQuery.fields);
      if (!userById[0][0]) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Usuário não encontrado' });
      } else {
        nomeCompleto ? nomeCompleto : (nomeCompleto = userById[0][0]['nomeCompleto']);
        email ? email : (email = userById[0][0]['email']);
        dataNascimento ? dataNascimento : (dataNascimento = userById[0][0]['dataNascimento']);
        telefone ? telefone : (telefone = userById[0][0]['telefone']);
        cep ? cep : (cep = userById[0][0]['cep']);
        endereco ? endereco : (endereco = userById[0][0]['endereco']);
        complemento ? complemento : (complemento = userById[0][0]['complemento']);
        bairro ? bairro : (bairro = userById[0][0]['bairro']);
        cidade ? cidade : (cidade = userById[0][0]['cidade']);
        uf ? uf : (uf = userById[0][0]['uf']);
        const updateUserQuery = await _userRepository.updateUser(nomeCompleto, email, dataNascimento, telefone, cep, endereco, complemento, bairro, cidade, uf, updateAt, +id);
        const updateUser: RowDataPacket[] = await connection().promise().query(updateUserQuery.query, updateUserQuery.fields);
        if (updateUser[0]['affectedRows'] > 0) {
          return res.status(StatusCodes.OK).json({ message: `Usuário ${userById[0][0]['email']} atualizado com sucesso!` });
        }
      }
    } catch (error) {
      return res.send(error);
    }
  }

  async getallUser(req: Request, res: Response) {
    try {
      const getAllUserQuery = await _userRepository.getAllUser();
      const getAllUser = await connection().promise().query(getAllUserQuery.query);
      if (getAllUser[0].length < 1) {
        return res.status(StatusCodes.BAD_REQUEST).json({ resultados: getAllUser[0].length, message: 'Nenhum usuário encontrato' });
      } else {
        return res.status(StatusCodes.OK).json({ resultados: getAllUser[0].length, data: getAllUser[0] });
      }
    } catch (error) {
      return error;
    }
  }

  async getUserByNomeCompleto(req: Request, res: Response) {
    try {
      const { nomeCompleto } = req.body;
      
      const getUserQuery = await _userRepository.userByNomeCompleto(`%${nomeCompleto}%`);
      const getUser = await connection().promise().query(getUserQuery.query, getUserQuery.fields);

      if (getUser[0].length < 1) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Usuário não encontrado' });
      } else {
        return res.status(StatusCodes.OK).json({ registros: getUser[0].length, data: getUser[0] });
      }
    } catch (error) {
      return error;
    }
  }
}

export default new userService();
