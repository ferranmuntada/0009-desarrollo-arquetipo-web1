import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProposalComponent } from './proposal.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
    {
        path: '',
        component: ProposalComponent,
        pathMatch: 'full',
    },
    {
        path: 'create',
        component: CreateComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
})
export class ProposalRoutingModule {}
