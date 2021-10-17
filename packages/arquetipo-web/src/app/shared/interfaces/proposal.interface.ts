export interface ActionsMenuInterface {
    id: number;
    name: string;
    icon: string;
    disabled?: boolean;
}

export interface ProposalInterface {
    id: number;
    description: string;
    type: string;
    amount: number;
    date: Date;
    status: number | string;
}

export interface ProposalInterfaceBTF {
    Id: number;
    Descripcion: string;
    Tipo: string;
    Importe: number;
    Fecha: string;
    Estado: string;
}
