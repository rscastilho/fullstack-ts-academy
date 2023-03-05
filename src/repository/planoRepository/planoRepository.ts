import _planoQueries from '../../data/queries/planoQueries';
import { iRetorno } from '../../interfaces/iRetorno';
import { connection } from './../../data/dbConnect';

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
}

export default new planoRepository();
