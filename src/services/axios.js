import axios from "axios";

const instance = axios.create();

// Setting Base URL
instance.defaults.baseURL = "http://localhost:7890/";

export default instance;