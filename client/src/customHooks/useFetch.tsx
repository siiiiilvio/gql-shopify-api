import React, { useState, useEffect } from 'react';

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFn = async () => {
            try {
                const result = await fetch(url);
                const resultJson = await result.json();
                setResponse(resultJson);
            } catch (error) {
                setError(error);
            }
        };
        fetchFn();
    }, []);

    return {
        response,
        error,
    };
};

export default useFetch;
