import axios from 'axios';

const service = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

// �������������
axios.interceptors.request.use(function (config) {
    // �ڷ�������֮ǰ��Щʲô
    //�鿴header �Ƿ�Я��token
    config.headers=config.headers||{};
    if (localStorage.getItem("token")){
        config.headers.token = localStorage.getItem("token")||""
    }
    return config;
  },(err)=>{
    return Promise.reject(err)
  });

// �����Ӧ������
axios.interceptors.response.use( (response) =>{
// ����Ӧ��������ʲô
    const code= response.data.code;
    if (code !=200){
        return Promise.reject(response.data)
    }
    return response;    
}, function (error) {
// ����Ӧ��������ʲô
    return Promise.reject(error);
});

export default service