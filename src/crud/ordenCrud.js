import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/client/v1/carshop';

const api = axios.create({baseURL: BASE_URL});


export const getOrdenes = () =>{
  return  api.get('/ordenes')
  .then((res)=>{
    return res.data;
  }).catch((err)=>{
    return err;
  })
}

export const getOrden =  (ordenId) => {
    return api.get(`/orden/${ordenId}`)
    .then((res)=>{
      return res.data;
    }).catch((err)=>{
      return err;
    })
  };
  
  export const createOrden = (ordenData) => {
    return api.post('/orden', ordenData)
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