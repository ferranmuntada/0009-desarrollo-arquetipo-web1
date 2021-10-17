import { HeaderInterface } from '../interfaces/header.interface';
import { NavigationInterface } from '../interfaces/navigation.interface';
import { IClientInterface } from '../interfaces/client.interface';
import { AppConfig } from '@app/config/app.config';
export class HeaderModel implements HeaderInterface, IClientInterface {
    id?: number;
    name: string;
    lastname: string;
    email?: string;
    phone?: string;
    proposals?: string[];
    type?: string;
    available?: boolean;
    patrimony?: number;

    constructor(source?: IClientInterface) {
        this.id = source.id || null;
        this.name = source.name || '';
        this.lastname = source.lastname || '';
        this.email = source.email || '';
        this.phone = source.phone || '';
        this.proposals = source.proposals || [];
        this.type = source.type || '';
        this.patrimony = source.patrimony || null;
    }

    public getHeaderSettings(userActions: string[]): NavigationInterface[] {
        return [
            {
                text: 'Patrimonio',
                class: '',
                navigation: `${AppConfig.APP_ROUTE_HERITAGE.valueOf()}`,
                disabled: !this.hasAccess(userActions, AppConfig.ROLE_APP_HERITAGE),
            },
            {
                text: 'Análisis 5D',
                class: '',
                navigation: `${AppConfig.APP_ROUTE_ANALYTICS.valueOf()}`,
                disabled: !this.hasAccess(userActions, AppConfig.ROLE_APP_ANALYTICS),
            },
            {
                text: 'Propuestas de inversión',
                class: '',
                navigation: `${AppConfig.APP_ROUTE_PROPOSAL.valueOf()}`,
                disabled: !this.hasAccess(userActions, AppConfig.ROLE_APP_PROPOSAL),
            },
            {
                text: 'Informes',
                class: '',
                navigation: `${AppConfig.APP_ROUTE_REPORTS.valueOf()}`,
                disabled: !this.hasAccess(userActions, AppConfig.ROLE_APP_REPORTS),
            },
        ];
    }

    public getUserSettings(): IClientInterface {
        return { name: this.name, lastname: this.lastname, patrimony: this.patrimony };
    }

    private hasAccess(userActions: string[], roles: string[]): boolean {
        const userAccessToHeader = userActions?.some((roleAction: string): boolean =>
            roles?.some((action: string): boolean => roleAction === action)
        );
        return userAccessToHeader;
    }
}
