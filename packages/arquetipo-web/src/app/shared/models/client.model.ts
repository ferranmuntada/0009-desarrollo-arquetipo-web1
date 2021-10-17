import { IClientInterface } from '../interfaces/client.interface';
export class IClientModel implements IClientInterface {
    name: string;
    lastname: string;
    email: string;
    phone: string;
    proposals: Array<string>;
    type: string;
    available: boolean;
    patrimony: number;
    nif: string;

    constructor(source?: IClientInterface) {
        this.name = source.name || '';
        this.lastname = source.lastname || '';
        this.email = source.email || '';
        this.phone = source.phone || '';
        this.proposals = source.proposals || [];
        this.type = source.type || '';
        this.available = source.available || false;
        this.patrimony = source.patrimony || 0;
        this.nif = source.nif || '';
    }
}
