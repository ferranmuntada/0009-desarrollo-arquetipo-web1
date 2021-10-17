import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

describe('ModalComponent', () => {
    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MatIconModule, TranslateModule.forRoot()],
            declarations: [ModalComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(ModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call toggle method with true', () => {
        spyOn(component, 'show');
        component.toggle(true);
        expect(component.isVisible).toBeTruthy();
    });

    it('should call toggle method with false', () => {
        component.toggle(false);
        expect(component.isVisible).toBeFalsy();
    });

    it('should call toggle method with null', () => {
        component.toggle(null);
        expect(component.isVisible).toBe(null);
    });

    it('should call show method', () => {
        component.show();
    });

    it('should call hide method', () => {
        component.hide();
    });
});
