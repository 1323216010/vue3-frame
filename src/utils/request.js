import axios from 'axios'

// 1.创建一个单例（实例）
const instance = axios.create({
    //一个接口前的统一地址
    baseURL: "http://localhost:8080",
    //超时的时间
    timeout: 10000, 
});

// 响应拦截器
instance.interceptors.response.use(res => {
    return  Promise.resolve(res.data)
})

//整体暴露
export default instance;