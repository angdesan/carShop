import axios from 'axios';

export const BASE_URL = 'http://localhost:10000/api/v1/client/auth';

const api = axios.create({baseURL: BASE_URL});

export const login = async (data) =>{
    // const response =  api.post('/login', data)
    // return response;
    return api.post('/login',data)
    .then((res)=>{
        return res.data;
    }).catch((err)=>{
        throw err;
    })
}

