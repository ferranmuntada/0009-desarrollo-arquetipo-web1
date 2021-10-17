import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-step2',
    templateUrl: './step2.component.html',
    styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
    public buttonBigStandardCallback: Subject<any> = new Subject<any>();
    public settings: any;
    public listItem: any;
    public listRadioButton: { text: string; checked?: boolean }[];
    public settingsInversion = {
        firstOption: 'Ninguna',
        title: 'Todos',
    };
    public listRadioButtonInversion: { text: string; checked?: boolean }[];
    public settingsProposal = {
        firstOption: 'Ninguna',
        title: 'Todos',
    };

    constructor() {
        this.settings = {
            firstOption: 'Ninguna',
            title: 'Ver todos',
        };
    }

    ngOnInit(): void {
        this.buttonBigStandardCallback.subscribe((d) => console.log(d));
        this.listItem = this.getListSelectExample();
        this.listRadioButton = this.getListRadioExample();
        this.listRadioButtonInversion = this.getListRadioInversionExample();
    }

    private getListRadioInversionExample(): any {
        return [{ text: 'Corto', checked: true }, { text: 'Medio' }, { text: 'Largo' }, { text: 'Todos' }];
    }

    private getListRadioExample(): any {
        return [{ text: 'Banca' }, { text: 'Inversión Fondos', checked: true }, { text: 'Inversión Seguros Vida' }, { text: 'Jubilación' }];
    }

    private getListSelectExample(): any {
        return [
            {
                name: 'nombre 1',
                icon: 'edit',
                id: 1,
                disabled: true,
            },
            {
                name: 'nombre 2',
                icon: '',
                id: 2,
            },
            {
                name: 'nombre 3',
                icon: '',
                id: 3,
            },
            {
                name: 'nombre 4',
                icon: '',
                id: 4,
            },
        ];
    }

    public actionRadioButton(event: Event): void {
        console.log(event);
    }
}
