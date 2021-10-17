import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as ClientActions from '../client.action';
import * as ClientSelectors from '../client.selectors';
import { ClientState } from '../client.reducer';
import { IClientInterface } from '../../../shared/interfaces/client.interface';

@Injectable({
    providedIn: 'root',
})
export class ClientNgrxService {
    constructor(private store: Store<ClientState>) {}

    public loadClient(client: IClientInterface, proposal: string): void {
        this.store.dispatch(ClientActions.loadClient({ client, proposal }));
    }

    public resetClient(): void {
        this.store.dispatch(ClientActions.resetClient());
    }

    public getClient(): Observable<ClientState> {
        return this.store.select(ClientSelectors.getClient);
    }
}
