import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      Accpet: 'application/json',
    }
  });

export const sendOtp =(data)=>{
    return api.post('/api/send-otp', data)
}

export const verifyOtp = (data)=>{
    return api.post('/api/verify-otp', data)
}

export const activate = (data)=>{
  return api.post('/api/activate', data)
}

export const findMatch = async (data)=>{
  return await api.post('/api/find-ride',data)
}
export const bookRide = (data)=>{
  return api.post('/api/book-ride',data)
}


export default api