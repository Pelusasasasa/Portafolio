import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

const { VITE_API_URL } = getEnvVariables();

const portfolioApi = axios.create({
    baseURL: VITE_API_URL
});



export default portfolioApi