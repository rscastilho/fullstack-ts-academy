import { iPresenca } from '../interfaces/iPresenca';
import appApi from './appApi';

export const PresencaApi = async (data: iPresenca) => {
  try {
    const result = await appApi.post('/presenca', data);
    console.log(result.data)
    return result;
  } catch (error: any) {
    return error.response.data;
  }
};
