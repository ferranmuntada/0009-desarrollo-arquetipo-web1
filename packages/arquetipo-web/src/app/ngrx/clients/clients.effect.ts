import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';

import * as ClientsActions from './clients.action';
import { ClientsService } from '../../shared/services/clients.service';
import { IClientInterface } from '../../shared/interfaces/client.interface';
import { of } from 'rxjs';

@Injectable()
export class ClientsEffects {
    constructor(private actions$: Actions, private clientsService: ClientsService) {}

    load$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientsActions.loadClients),
            mergeMap(() => {
                return this.clientsService.getClients().pipe(
                    map((clients: IClientInterface[]) => {
                        console.log('Clientes', clients);
                        return ClientsActions.onSuccessLoadClients({ clients });
                    }),
                    catchError((error) =>
                        of(
                            ClientsActions.loadClientesError({
                                error: {
                                    url: error.url,
                                    name: error.name,
                                    message: error.message,
                                },
                            })
                        )
                    )
                );
            })
        )
    );
}
