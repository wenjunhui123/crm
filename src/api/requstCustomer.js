import axios from './index';

//检测是否登录
export function isLogin(){
  return  axios.get('/user/login')
}

//退出登录
export   function signOut(){
    return axios.get('/user/signout')
}

//获取用户通讯录
export function getList(departmentId,search){
    return axios.get('/user/list',{
        params:{
            departmentId,
            search
        }
    })
}

