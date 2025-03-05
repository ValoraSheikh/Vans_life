import React from 'react'
import { useRouteError } from 'react-router-dom'


function Error() {
    const error = useRouteError()
    console.log(error);
    
    return (
        <>
        <h1>Error aa gaya mere bhai...</h1>
        <h1>Message: {error.message}</h1>
        <pre>Status: {error.status} - {error.statusText}</pre>
        </>
    )
}

export default Error