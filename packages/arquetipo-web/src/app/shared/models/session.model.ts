export interface ISession {
    email: string;
    token: string;
    isValid: boolean;
    name: string;
    role: string[];
}
