import { Request, Response } from 'express';
import _userRepository from '../../repository/userRepository/userRepository';
import { connection } from './../../data/dbConnect';
import { RowDataPacket } from 'mysql2';

class userService {
  async addAvatar(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const avatar = req.file?.filename;
      const avatarQuery = await _userRepository.addAvatar(+id, avatar || 'image.jpg');
      const resultQuery: RowDataPacket[] = await connection().promise().query(avatarQuery.query, avatarQuery.fields);
      if (!resultQuery[0].affectedRows) return res.status(400).json({ message: 'Erro ao salvar avatar' });
      return res.status(200).json({ message: 'Avatar salvo com sucesso!' });
    } catch (error) {
      return res.status(200).json({ message: error });
    }
  }
}

export default new userService();
