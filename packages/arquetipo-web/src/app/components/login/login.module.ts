import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { FormLoginComponent } from './components/form-login.component';
import { SharedModule } from '../../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [LoginComponent, FormLoginComponent],
    imports: [RouterModule, LoginRoutingModule, SharedModule],
})
export class LoginModule {}
