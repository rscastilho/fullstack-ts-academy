import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
const jwtSecret: any = process.env.JWT_SECRET;

class tokenJwt {
  async createTokenJwt(id: number, email: string) {
    try {
      return jwt.sign({ id, email, perfil: 'usuario' }, jwtSecret, { expiresIn: 50000 });
    } catch (error) {
      console.log('erro token jwt', error);
      return error;
    }
  }
}

export default new tokenJwt();
