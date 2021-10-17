import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * Ejemplo de componente para aplicar el cambio de idioma.
 */
@Component({
    selector: 'app-switch-lang',
    templateUrl: './switch-lang.component.html',
    styleUrls: ['./switch-lang.component.scss'],
})
export class SwitchLangComponent implements OnInit {
    langs: string[];

    constructor(private translate: TranslateService) {}

    ngOnInit() {
        this.langs = ['es', 'en'];
    }

    changeLang(langCode: string) {
        this.translate.use(langCode);
    }
}
