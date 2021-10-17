import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { datatableActionsMock } from '../../shared/model/data-table/actions.model';
import { SettingsInterface } from '../../shared/interfaces/select/select.interface';
import { ActionsMenuInterface } from '../../shared/interfaces/data-table/actions.interface';

@Component({
  selector: 'mln-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() settings: SettingsInterface = {
    firstOption: 'Ninguna',
    title: 'Ver opciones',
  };
  @Input() listItem: ActionsMenuInterface[] = datatableActionsMock;
  @Output() actionSelected: EventEmitter<ActionsMenuInterface> = new EventEmitter<ActionsMenuInterface>();

  constructor() {}

  ngOnInit(): void {}

  public onActionChange(seletecValue: number): void {
    this.actionSelected.emit(this.listItem[seletecValue]);
  }
}
