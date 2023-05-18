import axios from 'axios';

const service = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //查看header 是否携带token
    config.headers=config.headers||{};
    if (localStorage.getItem("token")){
        config.headers.token = localStorage.getItem("token")||""
    }
    return config;
  },(err)=>{
    return Promise.reject(err)
  });

// 添加响应拦截器
axios.interceptors.response.use( (response) =>{
// 对响应数据做点什么
    const code= response.data.code;
    if (code !=200){
        return Promise.reject(response.data)
    }
    return response;    
}, function (error) {
// 对响应错误做点什么
    return Promise.reject(error);
});

export default service