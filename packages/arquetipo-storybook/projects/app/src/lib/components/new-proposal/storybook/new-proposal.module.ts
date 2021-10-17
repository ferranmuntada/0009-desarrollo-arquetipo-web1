import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProposalComponent } from './new-proposal.component';
import { StepperModule } from '../stepper.module';

@NgModule({
  declarations: [NewProposalComponent],
  imports: [CommonModule, StepperModule],
  exports: [NewProposalComponent, StepperModule],
})
export class NewProposalModule {}
