import { ProposalInterface, ProposalInterfaceBTF } from '../interfaces/proposal.interface';

export class ProposalModel implements ProposalInterface {
    id: number;
    description: string;
    type: string;
    amount: number;
    date: Date;
    status: number | string;

    constructor(source?: ProposalInterface) {
        this.id = (source && source.id) || null;
        this.description = (source && source.description) || '';
        this.type = (source && source.type) || '';
        this.amount = (source && source.amount) || null;
        this.date = (source && source.date) || null;
        this.id = (source && source.id) || null;
        this.status = (source && source.status) || null;
    }
}

export function mapProposalBTF(proposals: ProposalInterfaceBTF[]): ProposalInterface[] {
    return proposals.map((proposal) => {
        return {
            id: proposal.Id || null,
            description: proposal.Descripcion || '',
            type: proposal.Tipo || '',
            amount: proposal.Importe || null,
            date: new Date(proposal.Fecha) || null,
            status: proposal.Estado,
        };
    });
}
