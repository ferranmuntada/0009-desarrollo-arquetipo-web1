import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export const defaultIcon = 'exit_to_app';

@Component({
    selector: 'app-button-logout',
    templateUrl: './button-logout.component.html',
    styleUrls: ['./button-logout.component.scss'],
})
export class ButtonLogoutComponent implements OnInit {
    @Input() icon = defaultIcon;
    @Output() logout = new EventEmitter<boolean>();

    constructor() {}

    ngOnInit(): void {}

    public onClick(): void {
        this.logout.emit(true);
    }
}
