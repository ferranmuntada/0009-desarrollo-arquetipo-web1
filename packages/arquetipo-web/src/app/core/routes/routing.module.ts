import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './routes';

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [],
})
export class RoutingModule {}
