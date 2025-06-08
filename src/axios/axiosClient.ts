import axios from "axios";

export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_URL_DUMY,
    headers:{
        'Content-Type':'application/json',
    }
})

axiosClient.interceptors.request.use(
    (config) => {
        const token  = localStorage.getItem('token')
        if(token){
            try{
                config.headers.Authorization = `Bearer ${token}`
            } catch (error) {
                console.log(error)
            }
        } else {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    }
)
axiosClient.interceptors.response.use(
    (response) => {
        return response.data ?? response
    },
    (error) => {
        return Promise.reject(error)
    }
)
