import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [RegisterComponent, FormRegisterComponent],
    imports: [RouterModule, RegisterRoutingModule, SharedModule],
})
export class RegisterModule {}
