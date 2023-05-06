const addInterceptor = (axiosInstance, { onError }) => {
    const reqInterceptor = axiosInstance.interceptors.request.use(
        (request) => {
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

export { addInterceptor, removeInterceptor }
