import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProposalRoutingModule } from './proposal-routing.module';
import { ProposalComponent } from './proposal.component';
import { SharedModule } from '@app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { ProposalEffects } from '@ngrx-app/proposal/proposal.effect';
import { FormsComponent } from './components/forms/forms.component';
import { CreateComponent } from './components/create/create.component';
import { ClientsEffects } from '@app/ngrx/clients/clients.effect';
import { AditionalSettingsComponent } from './components/aditional-settings/aditional-settings.component';
import { ProposalHeadlinesModalComponent } from './components/proposal-headlines-modal/proposal-headlines-modal.component';
import { ResumeModalComponent } from './components/resume-modal/resume-modal.component';
import { Step1Component } from './components/stepper/step1/step1.component';
import { Step2Component } from './components/stepper/step2/step2.component';
import { Step3Component } from './components/stepper/step3/step3.component';
import { Step4Component } from './components/stepper/step4/step4.component';
import { Step5Component } from './components/stepper/step5/step5.component';
import { Step6Component } from './components/stepper/step6/step6.component';

@NgModule({
    declarations: [
        ProposalComponent,
        FormsComponent,
        CreateComponent,
        AditionalSettingsComponent,
        ProposalHeadlinesModalComponent,
        ResumeModalComponent,
        Step1Component,
        Step2Component,
        Step3Component,
        Step4Component,
        Step5Component,
        Step6Component,
    ],
    imports: [CommonModule, ProposalRoutingModule, SharedModule, EffectsModule.forFeature([ProposalEffects, ClientsEffects])],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class ProposalModule {}
