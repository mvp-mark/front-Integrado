import axios from "axios";

const api = axios.create({
    baseURL: "https://projeto--integrado.herokuapp.com/"
});

export default api;