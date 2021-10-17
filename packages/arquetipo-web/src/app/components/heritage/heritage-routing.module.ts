import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeritageComponent } from './heritage.component';

const routes: Routes = [
    {
        path: '',
        component: HeritageComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
})
export class HeritageRoutingModule {}
