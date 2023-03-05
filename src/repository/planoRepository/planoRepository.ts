import _planoQueries from '../../data/queries/planoQueries';
import { iRetorno } from '../../interfaces/iRetorno';
import { connection } from './../../data/dbConnect';
import { RowDataPacket } from 'mysql2';

class planoRepository {
  async planoById(id: number): Promise<iRetorno> {
    try {
      const planoIdQuery = _planoQueries.planoById(id);
      const planoId = await connection().promise().query(planoIdQuery.query, planoIdQuery.fields);
      if (!planoId[0].length) {
        return { status: 400, message: 'Plano não cadastrado' };
      } else {
        return { status: 200, data: planoId[0] };
      }
    } catch (error: any) {
      return error;
    }
  }

  async getAllPlanos(): Promise<iRetorno> {
    try {
      const getAllPlanosQuery = _planoQueries.allPlano();
      const getAllPlanos = await connection().promise().query(getAllPlanosQuery.query);
      if (!getAllPlanos[0].length) {
        return { status: 400, message: 'Nenhum plano encontrado' };
      } else {
        return { status: 200, registros: getAllPlanos[0].length, data: getAllPlanos[0] };
      }
    } catch (error: any) {
      return error;
    }
  }

  async addPlano(valor: number, descricao: string): Promise<iRetorno> {
    try {
      const addPlanoQuery = _planoQueries.addPlano(valor, descricao);
      const addPlano: RowDataPacket[] = await connection().promise().query(addPlanoQuery.query, addPlanoQuery.fields);
      if (addPlano[0].affectedRows > 0) {
        return { status: 200, message: `Plano ${descricao}, valor ${valor}. Cadastrado com sucesso!` };
      } else {
        return { status: 400, message: `Erro ao cadastrar Plano ${descricao}` };
      }
    } catch (error: any) {
      return error;
    }
  }

  async planoByDescricao(descricao: string): Promise<iRetorno> {
    try {
      const planoByDescricaoQuery = _planoQueries.planoByDescricao(descricao);
      const planoByDescricao = await connection().promise().query(planoByDescricaoQuery.query, planoByDescricaoQuery.fields);
      if (!planoByDescricao[0].length) {
        return { status: 400, message: 'Plano não encontrado' };
      } else {
        return { status: 200, data: planoByDescricao[0] };
      }
    } catch (error: any) {
      return error;
    }
  }

  async updatePlano(valor: number, descricao: string, id: number): Promise<iRetorno> {
    try {
      const updatePlanoQuery = _planoQueries.updatePlano(valor, descricao, id);
      const updatePlano: RowDataPacket[] = await connection().promise().query(updatePlanoQuery.query, updatePlanoQuery.fields);
      if (updatePlano[0].affectedRows > 0) {
        return { status: 200, message: `Plano ${descricao} atualizado com sucesso!` };
      } else {
        return { status: 400, message: 'Plano não encontrado' };
      }
    } catch (error: any) {
      return error;
    }
  }
}

export default new planoRepository();
