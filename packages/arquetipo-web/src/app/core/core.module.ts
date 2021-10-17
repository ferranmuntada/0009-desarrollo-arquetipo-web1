import { NgModule } from '@angular/core';
import { HeaderModule } from './shell/header/header.module';
import { RouteService } from './services/route/route.service';
import { UnsubscribeService } from './services/unsubscribe/usubscribe.service';
import { RoutingModule } from './routes/routing.module';

@NgModule({
    imports: [RoutingModule, HeaderModule],
    exports: [HeaderModule],
    providers: [UnsubscribeService, RouteService],
})
export class CoreModule {}
