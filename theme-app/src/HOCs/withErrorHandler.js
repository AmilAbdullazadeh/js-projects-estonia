import React, { useEffect, useState } from 'react';

import { addInterceptor, removeInterceptor } from '../interceptors/axiosInterceptors';

const withErrorHandler = (WrappedComponent, axiosInstance) => {
    return props => {
        const [error, setError] = useState(null);

        const reqInterceptor = addInterceptor(axiosInstance, {
          onError: setError,
        });

        useEffect(() => {
            return () => {
                removeInterceptor(axiosInstance, reqInterceptor);
            };
        }, [reqInterceptor])

        return (
            <>
                {error && <p>{error.message}</p>}
                <WrappedComponent {...props} />
            </>
        )
  }
}

export default withErrorHandler;