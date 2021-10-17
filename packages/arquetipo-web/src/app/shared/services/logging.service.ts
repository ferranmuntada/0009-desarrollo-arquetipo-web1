import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';
import { GlobalErrorInterface } from '../interfaces/error.interface';

@Injectable()
export class LoggingService {
    private isDialogOpen = false;

    constructor(private readonly dialog: MatDialog) {}

    public openDialog(error: HttpErrorResponse): void {
        const data: GlobalErrorInterface = {
            status: (error && error?.status) || 500,
            statusText: (error && error?.statusText) || 'Error',
            message: (error && error?.message) || 'Internal Server Error',
        };
        if (!this.isDialogOpen) {
            this.isDialogOpen = true;
            const dialogRef = this.dialog.open(ErrorDialogComponent, {
                width: '400px',
                data,
            });

            dialogRef.afterClosed().subscribe(() => {
                this.isDialogOpen = false;
            });
        }
    }

    public sendLog(method: string, url?: string, payload?: any): void {
        console.log('SENDING LOG - ' + payload);
        // this.http[method]<any>(url, payload);
    }
}
