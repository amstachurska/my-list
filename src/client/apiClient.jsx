const urlBase = `${process.env.REACT_APP_API_URL}`

const apiClientBase = ({body, method, headers, urlEndpoint}) => {
    return fetch(urlBase.concat(urlEndpoint), {
        headers: {
            accept: 'application/json',
            'Content-type': 'application/json',
            ...headers,
        },
        method,
        body: JSON.stringify(body),
    })
}

const del = ({body, headers, url}) => apiClientBase({body, headers, method: 'DELETE', urlEndpoint: url})

const get = ({body, headers, url}) => apiClientBase({body, method: 'GET', headers, urlEndpoint: url})
const patch = ({body, headers, url}) => apiClientBase({body, method: 'PATCH', headers, urlEndpoint: url})
const post = ({ body, headers, url}) => apiClientBase({body, method: 'POST', headers, urlEndpoint: url})
const put = ({ body, headers, url}) => apiClientBase({body, method: 'PUT', headers, urlEndpoint: url})

export const apiClient = {
    delete: del,
    get,
    patch,
    post,
    put,
}