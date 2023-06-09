import _presensaQueries from '../../data/queries/presencaQueries';

class presencaRepository {
  async registrarPresenca(data: Date, user_id: number, modalidade_id: number) {
    return await _presensaQueries.registraPresenca(data, user_id, modalidade_id);
  }
}

export default new presencaRepository();
