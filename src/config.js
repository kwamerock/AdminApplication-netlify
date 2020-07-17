export default {
    auth0: {
        domain: process.env.REACT_APP_AUTH0_DOMAIN,
        clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        callbackUrl: process.env.REACT_APP_BASE_URL
    }
}