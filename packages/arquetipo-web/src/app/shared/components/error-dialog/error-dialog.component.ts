import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalErrorInterface } from '@shared/interfaces/error.interface';

/**
 * @ignore
 */
@Component({
    selector: 'app-response-dialog',
    templateUrl: './error-dialog.component.html',
    styleUrls: ['./error-dialog.component.scss'],
})
export class ErrorDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: GlobalErrorInterface) {}
}
