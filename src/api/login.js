import axios from './index';

export function login(account,password){
    return axios.post('/user/login',{account,password})
}