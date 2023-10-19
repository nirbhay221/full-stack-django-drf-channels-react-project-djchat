import axios,{AxiosInstance} from 'axios';
import {useNavigate} from 'react-router-dom'
import {BASE_URL} from '../config'
import { useAuthServices } from '../services/AuthServices';

const API_BASE_URL = BASE_URL;
const useAxiosWithInterceptor = () : AxiosInstance =>{
    const jwtAxios = axios.create({baseURL: API_BASE_URL})
    const navigate = useNavigate()
    const {logout} = useAuthServices();
    jwtAxios.interceptors.response.use(
        (response) =>{
            return response;
        },
        async(error) =>{
            const originalRequest = error.config;
             
            
            
            if (error.response?.status === 401 || 403){
               axios.defaults.withCredentials=  true; 
            //    const refreshToken = localStorage.getItem("refresh_token");
            //    if(refreshToken){
                try {

                    const response = await axios.post(
                        "http://127.0.0.1:8000/api/token/refresh/",
                        
                    )
                    if(response["status"] == 200){

                        return jwtAxios(originalRequest);
                    }
                    
                }
                catch(refreshError){
                    logout()
                    const goLogin  = () => navigate('/login')
                    goLogin();
                    return Promise.reject(refreshError)
                }
            // }
            //    else { 

            //     navigate('/login')
            //    }
            
             }
             
             return Promise.reject(error)
        }
    )
    return jwtAxios;
}
export default useAxiosWithInterceptor;