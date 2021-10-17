import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ProposalMessageComponent } from './proposal-message.component';

@NgModule({
  declarations: [ProposalMessageComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ProposalMessageComponent, MatIconModule],
})
export class ProposalMessageModule {}
