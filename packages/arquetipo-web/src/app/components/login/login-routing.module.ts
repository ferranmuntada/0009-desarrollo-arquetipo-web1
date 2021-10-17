import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
];

@NgModule({
    providers: [],
    imports: [RouterModule.forChild(ROUTES)],
})
export class LoginRoutingModule {}
