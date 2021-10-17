import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDialogComponent } from './error-dialog.component';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('ErrorDialogComponent', () => {
    let component: ErrorDialogComponent;
    let fixture: ComponentFixture<ErrorDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, StoreModule.forRoot({}), TranslateModule.forRoot()],
            declarations: [ErrorDialogComponent],
            providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ErrorDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
