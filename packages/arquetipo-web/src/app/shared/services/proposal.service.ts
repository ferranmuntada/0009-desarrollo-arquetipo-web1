import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProposalInterface, ProposalInterfaceBTF } from '../interfaces/proposal.interface';
import { proposalMock } from '@core/mocks/proposal.mock';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '@root/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ProposalService {
    constructor(private readonly http: HttpClient) {}

    getProposals(): Observable<ProposalInterfaceBTF[]> {
        return this.http.get<ProposalInterfaceBTF[]>(`${environment.URL_HOST}${environment.URL_PATH_API}${environment.URL_PROPOSAL}`);
        // return of(proposalMock).pipe(delay(700));
    }
}
