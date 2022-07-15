import axios from "axios";
import { Message } from 'element-plus';

const instance = axios.create({
  withCredentials: true,
  timeout: 1000,
  baseURL: ''
})

instance.defaults.headers.post = {
  'Content-type': 'application/x-www-form-urlencoded'
}

instance.defaults.headers.common = {
  'Auth-type': 'company-web',
  'X-Requested-With': 'XMLHttpRequest',
  'token': 'dadasdasdasdqweqweqw'
}

instance.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

const errorHandle = (status: number, other: any) => {
  switch(status) {
    case 400:
      alert('信息校验失败');
      break;
    case 401:
      alert('认证失败');
      break;
    case 403:
      alert('token校验失败');
      break;
    case 404:
      alert('请求资源不存在');
      break;
    case 500:
      alert('服务器繁忙');
      break;
    default:
      alert(other);
      break;
  }
}

// 添加相应拦截器
instance.interceptors.response.use(
  res => res.status === 200
    ? Promise.resolve(res) : Promise.reject(res),
  err => {
    alert(err);
    const { response } = err;
    if (response) {
      errorHandle(response.status, response.data)
      return Promise.reject(response);
    }
    alert('请求失败');
    return true;
  }
)

export default instance;
