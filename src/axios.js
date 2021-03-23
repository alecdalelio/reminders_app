import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:3005",
  headers: { Auth: "Simple AUTH" },
});

export default axios;
