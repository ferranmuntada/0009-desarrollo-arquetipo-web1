import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from './config/app.config';
import { Router, Event, NavigationEnd } from '@angular/router';
import { RouteService } from './core/services/route/route.service';
import { tap, filter } from 'rxjs/operators';
import { DateAdapter } from '@angular/material/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public isHeaderVisible = false;

    constructor(
        private readonly translate: TranslateService,
        private readonly router: Router,
        private readonly routeService: RouteService
    ) {
        let lang: string;
        if (localStorage.getItem('locale') === null) {
            localStorage.setItem('locale', AppConfig.I18N_DEFAULT);
            lang = localStorage.getItem('locale');
        } else {
            lang = localStorage.getItem('locale');
        }
        this.translate.setDefaultLang(lang);
    }

    ngOnInit(): void {
        this.router.events
            .pipe(
                tap((event: Event): void => this.routeService.changeRoute(event)),
                filter((event: Event): boolean => event instanceof NavigationEnd)
            )
            .subscribe((event: NavigationEnd) => {
                this.isHeaderVisible =
                    event.urlAfterRedirects !== '/' &&
                    event.urlAfterRedirects !== '/login' &&
                    event.urlAfterRedirects !== '/forgot' &&
                    event.urlAfterRedirects !== '/register' &&
                    event.urlAfterRedirects !== '/not-found';
            });
    }
}
