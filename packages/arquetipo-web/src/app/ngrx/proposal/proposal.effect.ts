import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { loadProposal, onSuccessLoadProposal, loadErrorProposal } from './proposal.action';
import { ProposalService } from '../../shared/services/proposal.service';
import { of } from 'rxjs';
import { ProposalInterface, ProposalInterfaceBTF } from '../../shared/interfaces/proposal.interface';
import { mapProposalBTF } from '@app/shared/models/proposal.model';
import { LoggingService } from '@app/shared/services/logging.service';

@Injectable()
export class ProposalEffects {
    constructor(private actions$: Actions, private proposalService: ProposalService, private readonly loggingService: LoggingService) {}

    load$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadProposal),
            mergeMap(() => {
                return this.proposalService.getProposals().pipe(
                    map((proposals: ProposalInterfaceBTF[]) => {
                        console.log('proposals', proposals);
                        return onSuccessLoadProposal({ proposals: mapProposalBTF(proposals) });
                    }),
                    catchError((error) => {
                        this.loggingService.openDialog(error);
                        this.loggingService.sendLog('get', 'none', error);
                        return of(
                            loadErrorProposal({
                                error: {
                                    url: error.url,
                                    name: error.name,
                                    message: error.message,
                                },
                            })
                        );
                    })
                );
            })
        )
    );
}
