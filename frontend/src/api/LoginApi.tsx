import appApi from "./appApi";
import { iLogar } from "../interfaces/iLogin";
import { AxiosResponse } from "axios";

const LoginApi = async (data: iLogar) => {
  try {
    const result: AxiosResponse<iLogar> = await appApi.post<iLogar>(
      "/login",
      data,
    );
    return result.data;
    // eslint-disable-next-line
  } catch (error: any) {
    return error.response.data;
  }
};

export default LoginApi;
