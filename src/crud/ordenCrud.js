import axios from 'axios';

const BASE_URL = 'http://localhost:10000/api/v1/client/carshop';

const api = axios.create({baseURL: BASE_URL});


export const getOrdenes = (token, user) =>{
  return  api.get('/orden', {
    headers: {
      Authorization: `Bearer ${token}`,
      'user_id': user
    }
  })
  .then((res)=>{
    return res.data;
  }).catch((err)=>{
    throw err;
  })
}

export const getOrden =  (ordenId,token) => {
    return api.get(`/orden/${ordenId}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then((res)=>{
      return res.data;
    }).catch((err)=>{
      throw err;
    })
  };
  
  export const createOrden = (ordenData,token,id) => {
    return api.post('/orden',ordenData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'user_id': id
      }
    })
    .then((res)=>{
      return res.data;
    }).catch((err)=>{
      return err;
    })
  };
  
  export const updateOrden =  (ordenId, ordenData) => {
    return api.put(`/orden/${ordenId}`, ordenData)
    .then((res)=>{
      return res.data;
    }).catch((err)=>{
      return err;
    })
  };
  
  export const deleteOrden =  (ordenId) => {
    return api.delete(`/orden/${ordenId}`)
    .then((res)=>{
      return res.data;
    }).catch((err)=>{
      return err;
    })
  };