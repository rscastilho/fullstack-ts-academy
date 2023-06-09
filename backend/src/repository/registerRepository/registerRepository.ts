import _registerQueries from '../../data/queries/registerQueries';
import { iRetorno } from '../../interfaces/iRetorno';
import userRepository from '../userRepository/userRepository';
import { connection } from './../../data/dbConnect';
import { RowDataPacket } from 'mysql2';

class registerUser {
  async addUser(
    numeroMatricula: number,
    email: string,
    nomeCompleto: string,
    cpf: string,
    dataNascimento: Date,
    telefone: string,
    senha: string,
    cep: string,
    endereco: string,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,
    dataInicio: Date,
    avatar: string,
    createAt: Date,
    senhaExpiraEm: Date,
    plano_id: number
  ) : Promise<iRetorno> {


    const registerUserQuery = _registerQueries.register(  numeroMatricula,
      email,
      nomeCompleto,
      cpf,
      dataNascimento,
      telefone,
      senha,
      cep,
      endereco,
      complemento,
      bairro,
      cidade,
      uf,
      dataInicio,
      avatar,
      createAt,
      senhaExpiraEm,
      plano_id)
    const registerUser: RowDataPacket[] = await connection().promise().query(registerUserQuery.query, registerUserQuery.fields)
    const userRegistred = await userRepository.userById(registerUser[0].insertId)
    return {message: "Usuário cadastrado com sucesso!", data: userRegistred.data, status: 200}
        
  }
}

export default new registerUser();
