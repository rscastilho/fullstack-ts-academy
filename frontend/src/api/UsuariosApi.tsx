import appApi from './appApi';
class UsuariosApi {
  async getAllUsers() {
    try {
      const result = await appApi.get('/user');
      return result.data;
    } catch (error: any) {
      return error.response.data;
    }
  }

  async deleteUser(userId: number) {
    try {
      const result = await appApi.patch(`/user/deleteuser/${userId}`);
      return result.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
}

export default new UsuariosApi();
