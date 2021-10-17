import { Routes } from '@angular/router';
import { AppConfig } from '../../config/app.config';

/**
 * Rutas de primer nivel de la aplicación.
 */
export const APP_ROUTES: Routes = [
    {
        path: `${AppConfig.APP_ROUTE_NOT_FOUND.valueOf()}`, // not found
        loadChildren: () => import('../shell/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule),
    },
];
