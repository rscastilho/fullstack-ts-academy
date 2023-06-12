import appApi from "./appApi";

const PlanoApi = async () => {
  try {
    const result = await appApi.get("/plano");
    return result.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export default PlanoApi;
