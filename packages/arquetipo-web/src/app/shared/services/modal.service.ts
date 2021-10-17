import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    public show$ = new Subject<boolean>();
    // public innerText$ = new Subject<string>();
    // public buttons$ = new Subject<ModalButtonModel[]>();
    // public qrInfo$ = new Subject<string>();
    // public user$ = new Subject<UserInterface>();

    public setMessage(config?: any): void {
        this.show$.next(true);
        /* this.innerText$.next(config.innerText);
    this.buttons$.next(config.buttons);
    this.qrInfo$.next(config.qrInfo);
    this.user$.next(config.user); */
    }
}
