import { RowDataPacket } from 'mysql2';
import { createTracing } from 'trace_events';
import { connection } from '../../data/dbConnect';
import _funcaoQueries from '../../data/queries/funcaoQueries';
import { retorno } from '../../interfaces/iretorno';



class funcaoRepository {
  async funcaoById(id: number) {
    try {
      const funcaoQuery = _funcaoQueries.getFuncaoById(id);
      const result = await connection().promise().query(funcaoQuery.query, funcaoQuery.fields);
      if (!result[0].length) {
        return { message: 'Função não encontrada', status: 400 };
      } else {
        return result;
      }
    } catch (error) {
      return error;
    }
  }

  async funcaoByDescricao(descricao: string) {
    try {
      const funcaoQuery = await _funcaoQueries.getByDescricao(descricao);
      const result = await connection().promise().query(funcaoQuery.query, funcaoQuery.fields);

      if (!result[0].length) {
        return { message: 'Função não encontrada', status: 400 };
      } else {
        return result;
      }
    } catch (error) {
      return error;
    }
  }

  
  async addFuncao(descricao: string) : Promise<retorno> {
    try {
      let createAt: Date = new Date();
      const funcaoQuery = _funcaoQueries.addDescricao(descricao, createAt);
      const result: RowDataPacket[] = await connection().promise().query(funcaoQuery.query, funcaoQuery.fields);
      if (result[0].affectedRows > 0) {
        const resulId = await this.funcaoById(result[0].insertId);
        return { message: 'Cadatrado realizado com sucesso!', status: 200, data: resulId };
      } else {
        return { message: 'Erro ao cadastrar função', status: 400 };
      }
    } catch (error: any) {
      return error;
    }
  }
}

export default new funcaoRepository();
