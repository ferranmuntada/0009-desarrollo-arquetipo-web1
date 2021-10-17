import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';

const routes: Routes = [
    {
        path: '',
        component: AnalyticsComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
})
export class AnalyticsRoutingModule {}
