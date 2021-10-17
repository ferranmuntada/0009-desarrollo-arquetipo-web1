import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as ClientsActions from '../clients.action';
import * as ClientsSelectors from '../clients.selectors';
import { IClientInterface } from '@shared/interfaces/client.interface';
import { ClientState } from '../clients.reducer';

@Injectable({
    providedIn: 'root',
})
export class ClientsNgrxService {
    constructor(private store: Store<ClientState>) {}

    public loadClients() {
        this.store.dispatch(ClientsActions.loadClients());
    }

    public addClient(client: IClientInterface) {
        this.store.dispatch(
            ClientsActions.addClient({
                client: { ...client },
            })
        );
    }

    public resetClients() {
        this.store.dispatch(ClientsActions.resetClients());
    }

    public getClients$(): Observable<ClientState> {
        return this.store.select(ClientsSelectors.getClients);
    }
}
