export const setAuth = (isAuth: boolean) => ({
    type: 'AUTHORISATION/SET_IS_AUTH',
    payload: isAuth,
} as const);