import appApi from "./appApi";

const UsuariosApi = async () => {
  try {
    const result = await appApi.get("/user");
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export default UsuariosApi;
