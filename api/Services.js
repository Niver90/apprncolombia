import axios from "axios";

const URL ="https://api-colombia.com/api/v1";


export const getColombiaInfo = async () =>{
        const response = await axios.get(`${URL}/Country/Colombia`);
        return response.data
  }

  export const getRegionesColombiaInfo = async () =>{
    const response = await axios.get(`${URL}/Region`);
    return response.data
}

  export const getDepartamentosColombiaInfo = async () =>{
    const response = await axios.get(`${URL}/Department`);
    return response.data
}
  export const getCitiesColombiaInfo = async () =>{
    const response = await axios.get(`${URL}/City`);
    return response.data
}
