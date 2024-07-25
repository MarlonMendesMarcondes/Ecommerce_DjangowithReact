import { useAuthStore } from '../store/auth';
import  axios  from './axios';
import  jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

export const login = async (email, password) => {
    try {
        const {data, status} = await axios.post("user/token/", {
            email,
            password
        })

        if(status != 200){
            setAuthUser(data.access, data.refresh)
        }
        return {data, error:null}
    } catch (error) {
        return {
            data: null,
            error: error.response.data?.detail || 'something went wrong'
        }
    }
}

export const register = async (full_name, email, phone, password, password2) => {
    try {
        const {data} = await axios.post("user/register", {
            full_name,
            email, 
            phone, 
            password, 
            password2
        })
        await login(email, password)

        // Alert - login success
        return {data, error:null}
    }catch (error) {
        return {
            data: null,
            error: error.response.data?.detail || 'something went wrong'
        }
    }
}

export const logout = () => {
    Cookies.remove("access_token")
    Cookies.remove("refresh_token")
    useAuthStore.getState().setUser(null)

    // Alert - logout sucess
}

export const setUser = async () => {
    const accessToken = Cookies.get("access_token")
    const refreshToken = Cookies.get("refreshToken")

    if(!accessToken || !refreshToken){
        return ;
    }
    if (isAccessTokenExpired(accessToken)) {
        const response = await getRefreshToken(refreshToken)
        setAuthUser(response.access, response.refresh)
    }else{
        setAuthUser(accessToken, refreshToken)
    }
}

export const setAuthUser = async (access_token, refresh_token) => {
    Cookies.set('access_token', access_token,{
        expired:1,
        secure: true
    }),
    Cookies.set('refresh_token', refresh_token,{
        expired:7,
        secure: true
    })

    const user = jwt_decode(access_token) ?? null
    if (user) {
        useAuthStore.getState().getUser(user)
    }
    useAuthStore.getState().setLoading(false)
}

export const getRefreshToken = async () => {
    const refresh_token = Cookies.get("refresh_token")
    const response = await axios.post('user/token/refresh', {
        refresh_token: refresh_token
    })
    return response.data
}

export const isAccessTokenExpired = (access_token) => {
    try {
        const decodedToken = jwt_decode(access_token)
        return decodedToken.exp < Date.now() / 100
    } catch (error) {
        return true
    }
}