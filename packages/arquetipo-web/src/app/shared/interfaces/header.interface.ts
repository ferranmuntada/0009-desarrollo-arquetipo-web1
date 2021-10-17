import { NavigationInterface } from './navigation.interface';
import { IClientInterface } from './client.interface';

export interface HeaderInterface {
    getHeaderSettings(userRole: string[]): NavigationInterface[];
    getUserSettings(): IClientInterface;
}
