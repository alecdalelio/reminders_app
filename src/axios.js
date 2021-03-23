import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:9000",
  headers: { Auth: "Simple AUTH" },
});

export default axios;
