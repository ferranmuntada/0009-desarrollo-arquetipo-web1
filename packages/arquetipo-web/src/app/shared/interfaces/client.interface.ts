export interface IClientInterface {
    id?: number;
    name: string;
    lastname: string;
    email?: string;
    phone?: string;
    proposals?: Array<string>;
    type?: string;
    available?: boolean;
    patrimony?: number;
    nif?: string;
}
