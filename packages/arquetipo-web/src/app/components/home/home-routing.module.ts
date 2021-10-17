import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    providers: [],
    imports: [RouterModule.forChild(ROUTES)],
    exports: [],
})
export class HomeRoutingModule {}
