import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import _perfilQueries from '../../data/queries/perfilQueries';
import { connection } from './../../data/dbConnect';
import { RowDataPacket } from 'mysql2';

const jwtSecret:any = process.env.JWT_SECRET;




class tokenJwt {
  async createTokenJwt(id: number, email: string) {
    try {
      const pegarPerfilQuery = _perfilQueries.pegarPerfil(id)
      const pegarPerfil: RowDataPacket[] = await connection().promise().query(pegarPerfilQuery.query, pegarPerfilQuery.fields)
      return jwt.sign({ id, email, perfil: pegarPerfil[0][0].perfil }, jwtSecret, { expiresIn: '1000s' });
    } catch (error) {
      console.log('erro token jwt', error);
      return error;
    }
  }
}

export default new tokenJwt();
