import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UnsubscribeService {
    private unsubscribe$ = new Subject<void>();

    public getUnsubscribe(): Subject<void> {
        return this.unsubscribe$;
    }

    public unsubscribe(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
