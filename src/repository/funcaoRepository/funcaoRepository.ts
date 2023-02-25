import { RowDataPacket } from 'mysql2';
import { createTracing } from 'trace_events';
import { connection } from '../../data/dbConnect';
import _funcaoQueries from '../../data/queries/funcaoQueries';
import { iRetorno } from '../../interfaces/iRetorno';

class funcaoRepository {
  async funcaoById(id: number): Promise<iRetorno> {
    try {
      const funcaoQuery = _funcaoQueries.getFuncaoById(id);
      const result: RowDataPacket[] = await connection().promise().query(funcaoQuery.query, funcaoQuery.fields);
      if (!result[0].length) {
        return { message: 'Função não encontrada', status: 400 };
      } else {
        return { data: result[0], status: 200 };
      }
    } catch (error: any) {
      return error;
    }
  }

  async funcaoByDescricao(descricao: string): Promise<iRetorno> {
    try {
      const funcaoQuery = await _funcaoQueries.getByDescricao(descricao);
      const result: RowDataPacket[] = await connection().promise().query(funcaoQuery.query, funcaoQuery.fields);

      if (!result[0].length) {
        return { message: 'Função não encontrada', status: 400 };
      } else {
        return { data: result[0], status: 200, registros: result[0].length };
      }
    } catch (error: any) {
      return error;
    }
  }

  async addFuncao(descricao: string): Promise<iRetorno> {
    try {
      let createAt: Date = new Date();
      const funcaoQuery = _funcaoQueries.addDescricao(descricao, createAt);
      const result: RowDataPacket[] = await connection().promise().query(funcaoQuery.query, funcaoQuery.fields);
      if (result[0].affectedRows > 0) {
        const funcaoCadastrada = await this.funcaoById(result[0].insertId);
        return { message: 'Cadastrado realizado com sucesso!', status: 200, data: funcaoCadastrada };
      } else {
        return { message: 'Erro ao cadastrar função', status: 400 };
      }
    } catch (error: any) {
      return error;
    }
  }
}

export default new funcaoRepository();
