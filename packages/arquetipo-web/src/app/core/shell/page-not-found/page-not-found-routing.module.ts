import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: PageNotFoundComponent,
    },
];

@NgModule({
    providers: [],
    imports: [RouterModule.forChild(routes)],
})
export class PageNotFoundRoutingModule {}
