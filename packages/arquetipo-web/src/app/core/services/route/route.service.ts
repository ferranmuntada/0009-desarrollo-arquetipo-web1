import { Injectable } from '@angular/core';
import { Event, NavigationEnd } from '@angular/router';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class RouteService {
    private currentRouteSubject: Subject<Event> = new ReplaySubject<Event>();
    private currentRoute$: Observable<Event>;

    public constructor() {
        this.currentRoute$ = this.currentRouteSubject.asObservable();
    }

    public getCurrentRoute(): Observable<NavigationEnd> {
        return this.currentRoute$.pipe(
            filter((event: Event): boolean => event instanceof NavigationEnd),
            map((event: Event): NavigationEnd => event as NavigationEnd)
        );
    }

    public changeRoute(route: Event): void {
        this.currentRouteSubject.next(route);
    }
}
