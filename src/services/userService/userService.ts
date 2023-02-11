import { Request, Response } from 'express';
import _userRepository from '../../repository/userRepository/userRepository';
import { connection } from './../../data/dbConnect';
import { RowDataPacket } from 'mysql2';
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
      if (!resultQuery[0].affectedRows) return res.status(400).json({ message: 'Erro ao salvar avatar' });

      return res.status(200).json({ message: 'Avatar salvo com sucesso!' });
    } catch (error) {
      console.log('ERR', error);
      return res.status(200).json({ message: error });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const pegarUserQuery = await _userRepository.userById(+id);
      const pegarUser: RowDataPacket[] = await connection().promise().query(pegarUserQuery.query, pegarUserQuery.fields);
      if (!pegarUser[0].length) {
        return res.status(404).json({ message: 'Usuário não cadastrado' });
      }
      const deleted: boolean = true;
      const deletedAt: Date = new Date();

      const deleteUserQuery = await _userRepository.deleteUser(deleted, deletedAt, +id);
      const deleteUser: RowDataPacket[] = await connection().promise().query(deleteUserQuery.query, deleteUserQuery.fields);
      if (deleteUser[0]['affectedRows'] > 0) {
        return res.status(200).json({ message: 'Usuario deletado com sucesso!' });
      } else {
        return res.status(400).json({ message: 'Erro ao deletar usuario.' });
      }
    } catch (error) {
      return res.json(error);
    }
  }

  async restoreUser(req: Request, res: Response): Promise<Response | Error> {
    try {
      const { id } = req.params;
      const pegarUserQuery = await _userRepository.userById(+id);
      const pegarUser: RowDataPacket[] = await connection().promise().query(pegarUserQuery.query, pegarUserQuery.fields);
      if (!pegarUser[0].length) {
        return res.status(404).json({ message: 'Usuário não cadastrado' });
      }
      const deleted: boolean = false;
      const deletedAt: Date = new Date();

      const deleteUserQuery = await _userRepository.deleteUser(deleted, deletedAt, +id);
      const deleteUser: RowDataPacket[] = await connection().promise().query(deleteUserQuery.query, deleteUserQuery.fields);
      if (deleteUser[0]['affectedRows'] > 0) {
        return res.status(200).json({ message: 'Usuário restaurado com sucesso!' });
      } else {
        return res.status(400).json({ message: 'Erro ao restaurar usuário.' });
      }
    } catch (error) {
      return res;
    }
  }

  async unblockUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const blocked: boolean = false;
      const unblockQuery = await _userRepository.unblockUser(blocked, new Date(), +id);
      const unblock = await connection().promise().query(unblockQuery.query, unblockQuery.fields);
      if (unblock[0]['affectedRows'] > 0) {
        res.status(200).json({ message: `Usuário desbloqueado com sucesso!` });
      } else {
        res.status(400).json({ message: `Erro ao desbloquear usuário` });
      }
    } catch (error) {
      return res;
    }
  }
}

export default new userService();
