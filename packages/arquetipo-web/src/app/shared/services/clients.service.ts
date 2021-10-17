import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { clientsMock } from '@core/mocks/clients.mock';
import { IClientInterface } from '../interfaces/client.interface';
import { delay, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ClientsService {
    constructor() {}

    getClients(): Observable<IClientInterface[]> {
        return of(clientsMock).pipe(delay(700), take(1));
    }
}
