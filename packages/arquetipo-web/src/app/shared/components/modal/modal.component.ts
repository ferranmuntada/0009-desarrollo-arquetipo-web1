import { Component, Input, ElementRef } from '@angular/core';

/**
 * @ignore
 */
@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
/**
 * Componente que muestra una ventana modal
 * @class
 * @name ModalComponent
 */
export class ModalComponent {
    public isVisible = false;
    @Input() header = true;
    @Input() buttonConfirm = false;
    @Input() closeable = true;
    @Input() title = '';
    /**
     * Método que setea el valor que se le pasa para indicar si el modal es visible o no
     *
     */
    public toggle(visible?) {
        this.isVisible = visible !== undefined ? visible : !this.isVisible;
    }

    /**
     * Método que muestra el modal
     */
    public show() {
        this.toggle(true);
    }

    /**
     * Método que oculta el modal
     */
    public hide() {
        this.toggle(false);
    }
    constructor(private el: ElementRef) {}
}
