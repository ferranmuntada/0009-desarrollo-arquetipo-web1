import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppConfig } from './config/app.config';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: `${AppConfig.APP_ROUTE_BASE.valueOf()}`, // base
        redirectTo: `${AppConfig.APP_ROUTE_LOGIN.valueOf()}`,
        pathMatch: 'full',
    },
    {
        path: `${AppConfig.APP_ROUTE_LOGIN.valueOf()}`, // login
        loadChildren: () => import('./components/login/login.module').then((m) => m.LoginModule),
    },
    {
        path: `${AppConfig.APP_ROUTE_REGISTER.valueOf()}`, // register
        loadChildren: () => import('./components/register/register.module').then((m) => m.RegisterModule),
    },
    {
        path: `${AppConfig.APP_ROUTE_HOME.valueOf()}`, // home
        loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule),
        canLoad: [AuthGuard],
    },
    {
        path: `${AppConfig.APP_ROUTE_HERITAGE.valueOf()}`, // heritage
        loadChildren: () => import('./components/heritage/heritage.module').then((m) => m.HeritageModule),
        canLoad: [AuthGuard],
    },
    {
        path: `${AppConfig.APP_ROUTE_ANALYTICS.valueOf()}`, // not found
        loadChildren: () => import('./components/analytics/analytics.module').then((m) => m.AnalyticsModule),
        canLoad: [AuthGuard],
    },
    {
        path: `${AppConfig.APP_ROUTE_REPORTS.valueOf()}`, // not found
        loadChildren: () => import('./components/reports/reports.module').then((m) => m.ReportsModule),
        canLoad: [AuthGuard],
    },
    {
        path: `${AppConfig.APP_ROUTE_PROPOSAL.valueOf()}`, // not found
        loadChildren: () => import('./components/proposal/proposal.module').then((m) => m.ProposalModule),
        canLoad: [AuthGuard],
    },
    {
        path: '**', // not found
        redirectTo: `${AppConfig.APP_ROUTE_NOT_FOUND.valueOf()}`,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
