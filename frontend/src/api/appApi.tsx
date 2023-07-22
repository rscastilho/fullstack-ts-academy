import axios from "axios";

const appApi = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default appApi;
