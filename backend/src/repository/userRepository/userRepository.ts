import _userQuery from '../../data/queries/userQueries';
import { iRetorno } from '../../interfaces/iRetorno';
import { connection } from './../../data/dbConnect';
import { RowDataPacket } from 'mysql2';

class userRepository {
  async userById(id: number): Promise<iRetorno> {
    try {
      const userByIdQuery = _userQuery.userById(id);
      const userById: RowDataPacket[] = await connection().promise().query(userByIdQuery.query, userByIdQuery.fields);
      if (!userById[0].length) {
        return { message: 'Id não encontado', status: 400 };
      } else {
        return { status: 200, data: userById[0][0] };
      }
    } catch (error: any) {
      return error;
    }
  }

  async userByNomeCompleto(nomeCompleto: string) {
    return await _userQuery.userByNomeCompleto(nomeCompleto);
  }

  async userByEmail(email: string): Promise<iRetorno> {
    try {
      const userByEmailQuery = _userQuery.userByEmail(email);
      const userByEmail: RowDataPacket[] = await connection().promise().query(userByEmailQuery.query, userByEmailQuery.fields);
      if (!userByEmail[0].length) {
        return { message: 'Usuário não encontrado', status: 400 };
      } else {
        return { status: 200, data: userByEmail[0] };
      }
    } catch (error: any) {
      return error;
    }
  }

  async userByNumeroMatricula(userByNumeroMatricula: number): Promise<iRetorno> {
    try {
      const userByNumeroMatriculaQuery = _userQuery.userByNumeroMatricula(userByNumeroMatricula);
      const userByMatricula: RowDataPacket[] = await connection().promise().query(userByNumeroMatriculaQuery.query, userByNumeroMatriculaQuery.fields);
      if (!userByMatricula[0].length) {
        return { message: 'Usuário não encontrado', status: 400 };
      } else {
        return { status: 200, data: userByMatricula[0] };
      }
    } catch (error: any) {
      return error;
    }
  }

  
  async userByCpf(cpf: string): Promise<iRetorno> {
    try {
      const userByCpfQuery = _userQuery.userByCpf(cpf);
      const userByCpf: RowDataPacket[] = await connection().promise().query(userByCpfQuery.query, userByCpfQuery.fields);
      if (!userByCpf[0].length) {
        return { message: 'Usuário não encontrado', status: 400 };
      } else {
        return { status: 200, data: userByCpf[0] };
      }
    } catch (error: any) {
      return error;
    }
  }

  async addErrors(quantidadeErros: number, id: number) {
    return await _userQuery.addErrors(quantidadeErros, id);
  }

  async blockUser(blocked: boolean, blockedAt: Date, id: number) {
    return await _userQuery.blockUser(blocked, blockedAt, id);
  }

  async unblockUser(blocked: boolean, blockedAt: Date, id: number) {
    return await _userQuery.unblockUser(blocked, blockedAt, id);
  }

  async isUserExists(numeroMatricula: number, email: string, cpf: string) {
    return await _userQuery.isUserExists(numeroMatricula, email, cpf);
  }

  async addAvatar(id: number, avatar: string) {
    return await _userQuery.addAvatar(id, avatar);
  }

  async pickAvatar(id: number) {
    return await _userQuery.pickAvatar(id);
  }

  async deleteUser(deleted: boolean, deletedAt: Date, id: number) {
    return await _userQuery.deleteUser(deleted, deletedAt, id);
  }
  async restoreUser(deleted: boolean, deletedAt: Date, id: number) {
    return await _userQuery.restoreUser(deleted, deletedAt, id);
  }
  async updateUser(
    nomeCompleto?: string,
    email?: string,
    dataNascimento?: Date,
    telefone?: string,
    cep?: string,
    endereco?: string,
    complemento?: string,
    bairro?: string,
    cidade?: string,
    uf?: string,
    updateAt?: Date,
    id?: number
  ): Promise<iRetorno> {
    const updateUserQuery = _userQuery.updateUser(nomeCompleto, email, dataNascimento, telefone, cep, endereco, complemento, bairro, cidade, uf, updateAt, +id!);
    const updateUser: RowDataPacket[] = await connection().promise().query(updateUserQuery.query, updateUserQuery.fields);

    if (updateUser[0].affectedRows > 0) {
      return { message: `Usuário ${email} atualizado com sucesso!`, status: 200 };
    } else {
      return { message: `Erro ao atualizar usuário ${email}.`, status: 400 };
    }
  }

  async getAllUser(): Promise<iRetorno> {
    try {
      const getAllQuery = _userQuery.getAllUser();
      const getAll = await connection().promise().query(getAllQuery.query);
      if (!getAll[0].length) {
        return { message: 'Nenhum usuário encontrado', status: 400, data: getAll[0] };
      } else {
        return { registros: getAll[0].length, status: 200, data: getAll[0] };
      }
    } catch (error: any) {
      return error;
    }
  }
}

export default new userRepository();
