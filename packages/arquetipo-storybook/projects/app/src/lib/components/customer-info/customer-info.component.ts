import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { UserInterface } from '../../shared/interfaces/user.interface';
import { SelectComponent } from '../select';

@Component({
  selector: 'mln-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent implements OnInit {
  @ViewChild(SelectComponent, { static: false })
  public customSelect: SelectComponent;
  @Input() user: UserInterface = {
    name: 'Jose',
    lastname: 'Manuel Perez',
    type: 'equilibrado',
    available: true,
    patrimony: 52416362,
  };
  @Input() settingsSelect: any;
  @Input() textRow = 'Patrimonio';
  @Input() rightButtonSettings = { text: 'Ver' };
  @Output() userProposal: EventEmitter<{
    user: UserInterface;
    proposal: string;
  }> = new EventEmitter();

  public currency: Intl.NumberFormat = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  });
  public proposalSelected: string;
  public initials: string;

  constructor() {}

  ngOnInit(): void {
    this.initials =
      this.user.name[0].toUpperCase() + this.user.lastname[0].toUpperCase();
  }

  public goToUserProposal(): void {
    if (!this.proposalSelected || !this.user.available) {
      return;
    }
    this.userProposal.emit({
      user: this.user,
      proposal: this.proposalSelected,
    });
  }
}
