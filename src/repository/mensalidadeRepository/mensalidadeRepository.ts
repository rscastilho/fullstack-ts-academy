import _mensalidadeQueries from '../../data/queries/mensalidadeQueries';
import { connection } from './../../data/dbConnect';
import { iRetorno } from '../../interfaces/iRetorno';
import { RowDataPacket } from 'mysql2';

class mensalidadeRepository {
  async registrarMensalidade(user_id: number, dataPagamento: Date, plano_id: number, mes_id: number, status: boolean): Promise<iRetorno> {
    try {
      const registrarMensalidadeQuery = _mensalidadeQueries.addMensalidade(user_id, dataPagamento, plano_id, mes_id, status);
      const registrarMensalidade: RowDataPacket[] = await connection().promise().query(registrarMensalidadeQuery.query, registrarMensalidadeQuery.fields);
      if (registrarMensalidade[0].affectedRows > 0) {
        return { status: 200, message: 'Mensalidade registrada com sucesso!' };
      } else {
        return { status: 400, message: 'Erro ao registrar mensalidade' };
      }
    } catch (error: any) {
      return error;
    }
  }
}

export default new mensalidadeRepository();
