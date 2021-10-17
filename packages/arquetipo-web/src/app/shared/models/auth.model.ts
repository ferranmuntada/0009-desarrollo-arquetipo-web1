/**
 * Modelos de ejemplo para el servicio de autenticación.
 */

export interface ILoginData {
    email: string;
    name?: string;
    password: string;
}

export interface IAccessToken {
    accessToken: string;
    tokenType: string;
    expiresIn: string;
}

export interface ITokenData {
    sub: string;
    exp: number;
    iss: string;
    aud: string;
    data: IUserData;
}

export interface IUserData {
    code: number;
    email: string;
    name: string;
}
