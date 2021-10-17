import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClientsNgrxService } from '@ngrx-app/clients/services/clients-ngrx.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    public text: string;

    constructor(private readonly clientsNgrxService: ClientsNgrxService) {}

    ngOnInit(): void {
        this.clientsNgrxService.loadClients();
    }

    public searchTextChange(text: string): void {
        this.text = text;
    }

    public ngOnDestroy(): void {
        this.clientsNgrxService.resetClients();
    }
}
