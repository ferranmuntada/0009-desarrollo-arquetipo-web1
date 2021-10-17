import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: RegisterComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    providers: [],
    imports: [RouterModule.forChild(ROUTES)],
})
export class RegisterRoutingModule {}
