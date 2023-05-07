import axios from "axios";

axios.defaults.baseURL = "https://api.example.com";

const addInterceptor = (axiosInstance, { onError }) => {
    const reqInterceptor = axiosInstance.interceptors.request.use(
        (request) => {
            const token = localStorage.getItem("token")
            if (token) {
                request.headers['Authorization'] = `Bearer ${token}`
            }

            return (request)
        },
        (error) => {
            onError(error)
            return Promise.reject(error)
        }
    )

    return reqInterceptor
}

const removeInterceptor = (axiosInstance, reqInterceptor) => {
    axiosInstance.interceptors.request.eject(reqInterceptor)
}

export { addInterceptor, removeInterceptor };

