import perfilQueries from '../../data/queries/perfilQueries';
import { iRetorno } from '../../interfaces/iRetorno';
import _funcaoRepository from '../funcaoRepository/funcaoRepository';
import _userRepository from '../userRepository/userRepository';
import { connection } from './../../data/dbConnect';
import { RowDataPacket } from 'mysql2';

class perfilRepository {
  async registarPerfil(userId: number, funcaoId: number): Promise<iRetorno> {
    try {
      const getUserId = await _userRepository.userById(userId);
      if (getUserId.status === 400) {
        return { message: 'UserId incorreto', status: 400 };
      }
      const getFuncaoId = await _funcaoRepository.funcaoById(funcaoId);
      if (getFuncaoId.status === 400) {
        return { message: 'FuncaoId incorreto', status: 400 };
      }

      const perfilQuery = perfilQueries.addPerfil(userId, funcaoId);
      const perfil: RowDataPacket[] = await connection().promise().query(perfilQuery.query, perfilQuery.fields);

      return { message: 'Perfil atualizado com sucesso!', status: 200 };
    } catch (error: any) {
      return error;
    }
  }

  async updatePerfil(userId: number, funcaoId: number): Promise<iRetorno> {
    try {
      const getUserId = await _userRepository.userById(userId);
      if (getUserId.status === 400) {
        return { message: 'UserId não existe', status: 400 };
      }
      const getFuncaoId = await _funcaoRepository.funcaoById(funcaoId);
      if (getFuncaoId.status === 400) {
        return { message: 'FuncaoId não existe', status: 400 };
      }

      const perfilQuery = perfilQueries.updatePerfil(userId, funcaoId);
      const perfil: RowDataPacket[] = await connection().promise().query(perfilQuery.query, perfilQuery.fields);
      if (perfil[0].affectedRows > 0) {
        return { message: 'Perfil atualizado com sucesso!', status: 200 };
      } else {
        return { message: 'Erro ao atualizar perfil.', status: 400 };
      }
    } catch (error: any) {
      return error;
    }
  }
}

export default new perfilRepository();
